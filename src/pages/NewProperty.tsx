import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ChevronRight, Upload, X } from "lucide-react"

export default function NewPropertyPage() {
  const [images, setImages] = useState<string[]>([])
  const [includes, setIncludes] = useState({
    medal: false,
    tshirt: false,
    nutrition: false,
    timing: false,
    photo: false,
    certificate: false,
    parking: false,
    firstAid: false,
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages([...images, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Мероприятие успешно добавлено!")
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
        <span className="text-foreground">Новое мероприятие</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Добавить мероприятие</h1>
        <p className="text-muted-foreground">Заполните форму ниже, чтобы разместить своё спортивное событие</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Основная информация</CardTitle>
              <CardDescription>Расскажите о вашем мероприятии</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Название мероприятия</Label>
                <Input id="title" placeholder="например, Городской марафон «Весенний забег»" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="type">Вид спорта</Label>
                  <Select required>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Выберите вид" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="run">🏃 Бег</SelectItem>
                      <SelectItem value="football">⚽ Футбол</SelectItem>
                      <SelectItem value="swim">🏊 Плавание</SelectItem>
                      <SelectItem value="bike">🚴 Велоспорт</SelectItem>
                      <SelectItem value="basketball">🏀 Баскетбол</SelectItem>
                      <SelectItem value="tennis">🎾 Теннис</SelectItem>
                      <SelectItem value="volleyball">🏐 Волейбол</SelectItem>
                      <SelectItem value="other">🏅 Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Статус</Label>
                  <Select required>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Выберите статус" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Открыта регистрация</SelectItem>
                      <SelectItem value="soon">Скоро</SelectItem>
                      <SelectItem value="finished">Завершено</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">Взнос за участие (₽)</Label>
                  <Input id="price" type="number" min="0" step="100" placeholder="0 — бесплатно" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="participants">Макс. участников</Label>
                  <Input id="participants" type="number" min="1" required />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Дата проведения</Label>
                  <Input id="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Длительность (часов)</Label>
                  <Input id="duration" type="number" min="1" max="72" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="format">Формат участия</Label>
                <Select required>
                  <SelectTrigger id="format">
                    <SelectValue placeholder="Выберите формат" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Индивидуальный</SelectItem>
                    <SelectItem value="team">Командный</SelectItem>
                    <SelectItem value="spectator">Для зрителей</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Описание</Label>
                <Textarea id="description" placeholder="Расскажите подробнее о мероприятии: трасса, условия, призы..." className="min-h-[150px]" required />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Место проведения</CardTitle>
                <CardDescription>Где пройдёт ваше мероприятие?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="venue">Название площадки</Label>
                  <Input id="venue" placeholder="Парк Горького" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="street">Адрес</Label>
                  <Input id="street" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">Город</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">Регион</Label>
                    <Input id="state" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Контакты организатора</CardTitle>
                <CardDescription>Как с вами связаться?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Имя организатора</Label>
                  <Input id="contactName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input id="contactEmail" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Телефон</Label>
                  <Input id="contactPhone" type="tel" required />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Фотографии</CardTitle>
              <CardDescription>Загрузите фото мероприятия (до 10 штук)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label
                  htmlFor="image-upload"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center hover:bg-muted/50"
                >
                  <Upload className="mb-2 h-8 w-8 text-muted-foreground" />
                  <span className="text-sm font-medium">Нажмите для загрузки</span>
                  <span className="text-xs text-muted-foreground">PNG, JPG до 10 МБ</span>
                  <input id="image-upload" type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
                </Label>
              </div>
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <img src={image} alt={`Фото ${index + 1}`} className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute right-1 top-1 rounded-full bg-background/80 p-1 hover:bg-background"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Что включено</CardTitle>
              <CardDescription>Отметьте, что получат участники</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {[
                  { key: "medal", label: "🥇 Медаль финишёра" },
                  { key: "tshirt", label: "👕 Футболка участника" },
                  { key: "nutrition", label: "🍌 Питание на трассе" },
                  { key: "timing", label: "⏱️ Хронометраж" },
                  { key: "photo", label: "📸 Фотосъёмка" },
                  { key: "certificate", label: "📜 Сертификат" },
                  { key: "parking", label: "🅿️ Парковка" },
                  { key: "firstAid", label: "🚑 Медпункт" },
                ].map(({ key, label }) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={`inc-${key}`}
                      checked={includes[key as keyof typeof includes]}
                      onCheckedChange={(checked) => setIncludes({ ...includes, [key]: !!checked })}
                    />
                    <label htmlFor={`inc-${key}`} className="text-sm font-medium cursor-pointer">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Link to="/properties">
            <Button type="button" variant="outline">Отмена</Button>
          </Link>
          <Button type="submit">Разместить мероприятие</Button>
        </div>
      </form>
    </div>
  )
}
