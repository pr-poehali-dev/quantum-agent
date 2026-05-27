import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { MapPin, Calendar, Filter, Trophy, Flame, Users } from "lucide-react"

export default function HomePage() {
  const featuredEvents = [
    {
      id: "1",
      title: "Городской марафон «Бегом к победе»",
      type: "Бег",
      address: "Парк Горького, Москва",
      price: 1500,
      bedrooms: 3,
      bathrooms: 0,
      squareFeet: 2000,
      yearBuilt: 2026,
      status: "Открыта регистрация",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "2",
      title: "Турнир по пляжному волейболу",
      type: "Волейбол",
      address: "Серебряный бор, Москва",
      price: 0,
      bedrooms: 2,
      bathrooms: 0,
      squareFeet: 500,
      yearBuilt: 2026,
      status: "Открыта регистрация",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "3",
      title: "Велогонка «Москва — Коломна»",
      type: "Велоспорт",
      address: "Парк Лужники, Москва",
      price: 3000,
      bedrooms: 5,
      bathrooms: 0,
      squareFeet: 1200,
      yearBuilt: 2026,
      status: "Скоро",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
  ]

  const stats = [
    { icon: Trophy, label: "Мероприятий", value: "1 200+" },
    { icon: Users, label: "Участников", value: "85 000+" },
    { icon: MapPin, label: "Городов", value: "47" },
    { icon: Flame, label: "Видов спорта", value: "60+" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Найдите спортивное событие по душе
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Тысячи мероприятий по всей России — от любительских забегов до профессиональных турниров. Участвуй, болей, побеждай!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/properties">
                  <Button size="lg" className="gap-1.5">
                    <Calendar className="h-4 w-4" />
                    Смотреть события
                  </Button>
                </Link>
                <Link to="/properties/new">
                  <Button size="lg" variant="outline" className="gap-1.5">
                    <Trophy className="h-4 w-4" />
                    Добавить мероприятие
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Search */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-lg border bg-background p-4 shadow-sm">
                <div className="flex items-center gap-2 pb-4">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-lg font-semibold">Быстрый поиск</h2>
                </div>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">
                        Вид спорта
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">Любой</option>
                        <option value="run">Бег</option>
                        <option value="bike">Велоспорт</option>
                        <option value="swim">Плавание</option>
                        <option value="football">Футбол</option>
                        <option value="basketball">Баскетбол</option>
                        <option value="tennis">Теннис</option>
                        <option value="volleyball">Волейбол</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">
                        Уровень
                      </label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <option value="">Любой</option>
                        <option value="beginner">Новичок</option>
                        <option value="amateur">Любитель</option>
                        <option value="pro">Профессионал</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">
                        Дата от
                      </label>
                      <input
                        type="date"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">
                        Дата до
                      </label>
                      <input
                        type="date"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">
                      Формат участия
                    </label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option value="">Любой</option>
                      <option value="individual">Индивидуальный</option>
                      <option value="team">Командный</option>
                      <option value="spectator">Для зрителей</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Город или регион"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <Link to="/properties">
                    <Button className="w-full">Найти мероприятия</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b py-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                <stat.icon className="h-8 w-8 text-primary" />
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Ближайшие события</h2>
              <p className="text-muted-foreground">Популярные мероприятия этой недели</p>
            </div>
            <Link to="/properties">
              <Button variant="outline">Все события</Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <PropertyCard key={event.id} property={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Популярные виды спорта</h2>
            <p className="mt-2 text-muted-foreground">Выберите интересующее направление</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { emoji: "🏃", label: "Бег" },
              { emoji: "⚽", label: "Футбол" },
              { emoji: "🏊", label: "Плавание" },
              { emoji: "🚴", label: "Велоспорт" },
              { emoji: "🏀", label: "Баскетбол" },
              { emoji: "🎾", label: "Теннис" },
            ].map((cat) => (
              <Link to="/properties" key={cat.label}>
                <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-4 text-center transition-all hover:border-primary hover:shadow-md cursor-pointer">
                  <span className="text-3xl">{cat.emoji}</span>
                  <span className="text-sm font-medium">{cat.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-primary p-8 text-primary-foreground md:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Организуете мероприятие?</h2>
              <p className="mt-3 text-primary-foreground/80">
                Разместите своё событие на СпортАфише и привлеките тысячи любителей спорта со всей России
              </p>
              <Link to="/properties/new">
                <Button size="lg" variant="secondary" className="mt-6">
                  Добавить мероприятие
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
