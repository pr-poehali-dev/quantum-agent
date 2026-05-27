import { PropertyCard } from "@/components/property-card"
import { SearchFilters } from "@/components/search-filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Grid2X2, List, MapPin, Search, SlidersHorizontal } from "lucide-react"

export default function PropertiesPage() {
  const events = [
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
      address: "Старт: Лужники, Москва",
      price: 3000,
      bedrooms: 5,
      bathrooms: 0,
      squareFeet: 1200,
      yearBuilt: 2026,
      status: "Скоро",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "4",
      title: "Любительский турнир по теннису",
      type: "Теннис",
      address: "Теннисный клуб «Олимп», Санкт-Петербург",
      price: 2000,
      bedrooms: 2,
      bathrooms: 0,
      squareFeet: 64,
      yearBuilt: 2026,
      status: "Открыта регистрация",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "5",
      title: "Открытый чемпионат по плаванию",
      type: "Плавание",
      address: "Бассейн «Олимпийский», Москва",
      price: 1200,
      bedrooms: 4,
      bathrooms: 0,
      squareFeet: 300,
      yearBuilt: 2026,
      status: "Открыта регистрация",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "6",
      title: "Уличный баскетбол 3×3",
      type: "Баскетбол",
      address: "Gorky Park Street Courts, Москва",
      price: 0,
      bedrooms: 3,
      bathrooms: 0,
      squareFeet: 120,
      yearBuilt: 2026,
      status: "Открыта регистрация",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Каталог мероприятий</h1>
        <p className="text-muted-foreground">Найдите идеальное спортивное событие среди наших предложений</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Поиск по городу, виду спорта или названию..." className="w-full pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-1 sm:hidden">
            <SlidersHorizontal className="h-4 w-4" />
            Фильтры
          </Button>
          <Tabs defaultValue="grid" className="hidden sm:block">
            <TabsList>
              <TabsTrigger value="grid">
                <Grid2X2 className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="list">
                <List className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="map">
                <MapPin className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="sm" className="h-9">
            Сначала ближайшие
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <div className="hidden lg:block">
          <SearchFilters />
        </div>
        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <PropertyCard key={event.id} property={event} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline">Загрузить ещё</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
