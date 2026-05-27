import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Filter, X } from "lucide-react"

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [participantsRange, setParticipantsRange] = useState([1, 5000])
  const [durationRange, setDurationRange] = useState([1, 8])
  const [sportTypes, setSportTypes] = useState({
    run: false,
    football: false,
    swim: false,
    bike: false,
    basketball: false,
    tennis: false,
    volleyball: false,
    other: false,
  })
  const [format, setFormat] = useState({
    individual: false,
    team: false,
    spectator: false,
  })
  const [status, setStatus] = useState({
    open: true,
    soon: false,
    finished: false,
  })

  const formatPrice = (price: number) => {
    if (price === 0) return "Бесплатно"
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleReset = () => {
    setPriceRange([0, 10000])
    setParticipantsRange([1, 5000])
    setDurationRange([1, 8])
    setSportTypes({ run: false, football: false, swim: false, bike: false, basketball: false, tennis: false, volleyball: false, other: false })
    setFormat({ individual: false, team: false, spectator: false })
    setStatus({ open: true, soon: false, finished: false })
  }

  return (
    <div className="w-full rounded-lg border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Фильтры</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 gap-1">
          <X className="h-4 w-4" />
          Сбросить
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["price", "sportType", "status", "format"]}>
        <AccordionItem value="price">
          <AccordionTrigger>Стоимость участия</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={priceRange} min={0} max={20000} step={500} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <div className="w-[120px]">
                  <Label htmlFor="price-min">От</Label>
                  <Input id="price-min" type="text" value={formatPrice(priceRange[0])} readOnly />
                </div>
                <div className="w-[120px]">
                  <Label htmlFor="price-max">До</Label>
                  <Input id="price-max" type="text" value={formatPrice(priceRange[1])} readOnly />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sportType">
          <AccordionTrigger>Вид спорта</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { key: "run", label: "🏃 Бег" },
                { key: "football", label: "⚽ Футбол" },
                { key: "swim", label: "🏊 Плавание" },
                { key: "bike", label: "🚴 Велоспорт" },
                { key: "basketball", label: "🏀 Баскетбол" },
                { key: "tennis", label: "🎾 Теннис" },
                { key: "volleyball", label: "🏐 Волейбол" },
                { key: "other", label: "🏅 Другое" },
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={`sport-${key}`}
                    checked={sportTypes[key as keyof typeof sportTypes]}
                    onCheckedChange={(checked) => setSportTypes({ ...sportTypes, [key]: !!checked })}
                  />
                  <label htmlFor={`sport-${key}`} className="text-sm font-medium leading-none cursor-pointer">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="format">
          <AccordionTrigger>Формат участия</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-3">
              {[
                { key: "individual", label: "Индивидуальный" },
                { key: "team", label: "Командный" },
                { key: "spectator", label: "Для зрителей" },
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={`format-${key}`}
                    checked={format[key as keyof typeof format]}
                    onCheckedChange={(checked) => setFormat({ ...format, [key]: !!checked })}
                  />
                  <label htmlFor={`format-${key}`} className="text-sm font-medium leading-none cursor-pointer">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="participants">
          <AccordionTrigger>Количество участников</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={participantsRange} min={1} max={10000} step={100} onValueChange={setParticipantsRange} />
              <div className="flex items-center justify-between">
                <div className="w-[120px]">
                  <Label htmlFor="part-min">От</Label>
                  <Input id="part-min" type="number" value={participantsRange[0]} readOnly />
                </div>
                <div className="w-[120px]">
                  <Label htmlFor="part-max">До</Label>
                  <Input id="part-max" type="number" value={participantsRange[1]} readOnly />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="status">
          <AccordionTrigger>Статус</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-3">
              {[
                { key: "open", label: "Открыта регистрация" },
                { key: "soon", label: "Скоро" },
                { key: "finished", label: "Завершено" },
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center space-x-2">
                  <Checkbox
                    id={`status-${key}`}
                    checked={status[key as keyof typeof status]}
                    onCheckedChange={(checked) => setStatus({ ...status, [key]: !!checked })}
                  />
                  <label htmlFor={`status-${key}`} className="text-sm font-medium leading-none cursor-pointer">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="mt-6 w-full">Применить фильтры</Button>
    </div>
  )
}
