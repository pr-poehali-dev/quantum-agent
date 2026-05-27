import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, MapPin, Phone, Mail, Heart, Share2, Home, ChevronRight, Clock, Trophy, Flag } from "lucide-react"

export default function PropertyDetailPage() {
  const { id } = useParams()

  const event = {
    id: id,
    title: "Городской марафон «Бегом к победе»",
    type: "Бег",
    address: "Парк Горького, Москва",
    price: 1500,
    participants: 2000,
    duration: 3,
    date: "15 июня 2026",
    status: "Открыта регистрация",
    description:
      "Ежегодный городской марафон для любителей бега всех уровней подготовки. Трасса проходит по живописным аллеям Парка Горького и набережным Москвы-реки. Участников ждёт несколько дистанций: 5 км, 10 км и полный марафон 42 км. Финишёров награждают медалями, победителей — кубками и денежными призами.",
    features: [
      "Дистанция 5, 10, 42 км",
      "Хронометраж",
      "Медали финишёрам",
      "Пункты питания",
      "Раздевалки и душ",
      "Камера хранения",
      "Фотографы на трассе",
      "Детский забег",
      "Призовой фонд",
      "Сертификаты участника",
      "Официальная футболка",
      "Скорая помощь на трассе",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    organizer: {
      name: "Иван Соколов",
      phone: "+7 (495) 123-45-67",
      email: "ivan@sportafisha.ru",
      image: "/placeholder.svg?height=200&width=200",
    },
  }

  const formatPrice = (price: number) => {
    if (price === 0) return "Бесплатно"
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="flex items-center gap-1 hover:text-foreground">
          <Home className="h-4 w-4" />
          Главная
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/properties" className="hover:text-foreground">
          События
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{event.title}</span>
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="mb-2 text-3xl font-bold">{event.title}</h1>
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{event.address}</span>
            <Badge
              className={
                event.status === "Открыта регистрация"
                  ? "bg-green-100 text-green-800"
                  : event.status === "Скоро"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }
              variant="outline"
            >
              {event.status}
            </Badge>
          </div>
          <div className="mb-6 flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-5 w-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-5 w-5" />
              <span>{event.participants} участников</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-5 w-5" />
              <span>~{event.duration} часа</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="h-5 w-5" />
              <span>{event.type}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <div className="text-3xl font-bold text-primary">{formatPrice(event.price)}</div>
          <p className="text-sm text-muted-foreground mt-1">взнос за участие</p>
          <div className="mt-4 flex gap-2">
            <Button size="lg">Зарегистрироваться</Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-4 w-4" />
              Сохранить
            </Button>
            <Button size="icon" variant="outline">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-8 grid grid-cols-4 gap-4">
        <div className="col-span-4 aspect-video overflow-hidden rounded-lg lg:col-span-2 lg:row-span-2">
          <img
            src={event.images[0] || "/placeholder.svg"}
            alt={event.title}
            className="h-full w-full object-cover"
          />
        </div>
        {event.images.slice(1, 5).map((image, index) => (
          <div key={index} className="col-span-2 aspect-video overflow-hidden rounded-lg sm:col-span-1">
            <img
              src={image || "/placeholder.svg"}
              alt={`${event.title} ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mb-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <Tabs defaultValue="description">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="features">Условия</TabsTrigger>
              <TabsTrigger value="location">Локация</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <h2 className="text-2xl font-semibold">О мероприятии</h2>
              <p className="leading-relaxed">{event.description}</p>
            </TabsContent>
            <TabsContent value="features">
              <h2 className="mb-4 text-2xl font-semibold">Что включено</h2>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {event.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Flag className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="location">
              <h2 className="mb-4 text-2xl font-semibold">Место проведения</h2>
              <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Здесь будет отображаться карта</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <img
                src={event.organizer.image || "/placeholder.svg"}
                alt={event.organizer.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{event.organizer.name}</h3>
              <p className="text-sm text-muted-foreground">Организатор</p>
            </div>
          </div>
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{event.organizer.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{event.organizer.email}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Ваше имя
              </label>
              <input
                id="name"
                type="text"
                placeholder="Иван Иванов"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="ivan@example.com"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Вопрос организатору
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Напишите вопрос..."
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <Button className="w-full">Связаться с организатором</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
