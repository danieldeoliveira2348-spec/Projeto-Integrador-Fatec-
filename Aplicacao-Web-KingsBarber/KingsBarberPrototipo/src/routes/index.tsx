import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Scissors,
  X,
} from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-barber.jpg";
import mateusImage from "@/assets/barber-mateus.jpg";
import rafaelImage from "@/assets/barber-rafael.jpg";
import lucasImage from "@/assets/barber-lucas.jpg";
import fadeImage from "@/assets/gallery-fade.jpg";
import beardImage from "@/assets/gallery-beard.jpg";
import textureImage from "@/assets/gallery-texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Barbier | Barbearia de Alto Padrão" },
      {
        name: "description",
        content:
          "Cortes de precisão, barba terapia e rituais masculinos em uma barbearia contemporânea de alto padrão.",
      },
      { property: "og:title", content: "Maison Barbier | A arte do cuidado masculino" },
      {
        property: "og:description",
        content: "Uma experiência autoral de cuidado, técnica e presença.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    name: "Corte Signature",
    price: "R$ 95",
    duration: "50 min",
    description: "Consultoria de visagismo, corte de precisão e finalização autoral.",
  },
  {
    name: "Barba Terapia",
    price: "R$ 75",
    duration: "40 min",
    description: "Toalha quente, óleos essenciais e desenho impecável com navalha.",
  },
  {
    name: "Combo Royal",
    price: "R$ 155",
    duration: "90 min",
    description: "O ritual completo da casa: cabelo, barba, terapia e acabamento.",
  },
];

const barbers = [
  { name: "Mateus Alves", specialty: "Fades & Visagismo", image: mateusImage },
  { name: "Rafael Nobre", specialty: "Barbas & Clássicos", image: rafaelImage },
  { name: "Lucas Motta", specialty: "Texturas & Tendências", image: lucasImage },
];

const dates = [
  { weekday: "TER", day: "22", month: "SET" },
  { weekday: "QUA", day: "23", month: "SET" },
  { weekday: "QUI", day: "24", month: "SET" },
  { weekday: "SEX", day: "25", month: "SET" },
];

const times = ["09:00", "10:30", "13:00", "14:30", "16:00", "18:30"];

const bookingSchema = z.object({
  name: z.string().trim().min(3, "Informe seu nome completo.").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Informe um WhatsApp válido com DDD."),
});

function scrollToBooking() {
  document.querySelector("#agendar")?.scrollIntoView({ behavior: "smooth" });
}

function BrandMark() {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="Maison Barbier — início">
      <span className="flex size-9 rotate-45 items-center justify-center border border-primary/70 transition-colors group-hover:bg-primary/10">
        <span className="-rotate-45 font-display text-lg text-primary">D</span>
      </span>
      <span className="leading-none">
        <strong className="block font-display text-xl font-normal text-foreground">Daniel</strong>
        <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.34em] text-primary">Barbier</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Serviços", "#servicos"],
    ["Colaboradores", "#colaboradores"],
    ["Galeria", "#galeria"],
    ["Sobre", "#sobre"],
    ["Contato", "#contato"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 xl:px-16">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button variant="luxury" size="lg" onClick={scrollToBooking}>Agendar horário</Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="glass-panel border-x-0 border-t-0 px-5 py-6 lg:hidden" aria-label="Navegação móvel">
          <div className="flex flex-col gap-5">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.18em] text-foreground">{label}</a>
            ))}
            <Button variant="luxury" size="lg" onClick={() => { setOpen(false); scrollToBooking(); }}>Agendar horário</Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, title, align = "left" }: { eyebrow: string; title: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className="text-balance font-display text-4xl font-normal leading-tight text-foreground md:text-6xl">{title}</h2>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[92vh] items-end overflow-hidden pt-20 md:min-h-[900px]">
      <img src={heroImage} alt="Barbeiro realizando um corte fade de precisão" width={1600} height={1104} className="hero-image absolute inset-0 size-full object-cover object-[66%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_4%,color-mix(in_oklab,var(--background)_88%,transparent)_38%,color-mix(in_oklab,var(--background)_18%,transparent)_76%),linear-gradient(0deg,var(--background)_0%,transparent_48%)]" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24 xl:px-16">
        <div className="reveal-up max-w-3xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-primary">Barbearia contemporânea · São Paulo</span>
          </div>
          <h1 className="text-balance font-display text-6xl font-normal leading-[0.98] text-foreground sm:text-7xl md:text-[6.5rem]">
            A arte do cuidado <span className="text-primary">masculino.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-foreground/75 md:text-lg">
            Técnica, precisão e rituais de cuidado em uma experiência criada para homens que reconhecem o valor dos detalhes.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button variant="luxury" size="lg" className="h-12 px-7" onClick={scrollToBooking}>Agendar agora <ArrowRight /></Button>
            <Button variant="luxuryOutline" size="lg" className="h-12 px-7" asChild><a href="#servicos">Conhecer serviços</a></Button>
          </div>
        </div>
        <div className="mt-14 flex items-center gap-7 text-xs text-muted-foreground md:absolute md:bottom-24 md:right-16 md:mt-0 md:[writing-mode:vertical-rl]">
          <span>Desde 2018</span><span className="h-px w-12 bg-primary/50 md:h-12 md:w-px" /><span>Excelência em cada detalhe</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="border-t border-line py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle eyebrow="Rituais da casa" title="Serviços desenhados para a sua melhor versão." />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Cada atendimento começa com uma conversa e termina com uma assinatura única.</p>
        </div>
        <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.name} className="group bg-background p-8 transition-colors hover:bg-surface md:p-10">
              <div className="flex items-start justify-between">
                <span className="font-display text-2xl text-primary/40">0{index + 1}</span>
                <Scissors className="size-5 text-primary transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.2} />
              </div>
              <h3 className="mt-20 font-display text-3xl text-foreground">{service.name}</h3>
              <p className="mt-4 min-h-12 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <div className="mt-8 flex items-end justify-between border-t border-line pt-6">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{service.duration}</span>
                <span className="font-display text-2xl text-primary">{service.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="colaboradores" className="bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16">
        <SectionTitle eyebrow="Nossos especialistas" title="Mestres no ofício. Autores do seu estilo." align="center" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {barbers.map((barber) => (
            <article key={barber.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden border border-line bg-background">
                <img src={barber.image} alt={`${barber.name}, especialista em ${barber.specialty}`} width={1008} height={1264} loading="lazy" className="size-full object-cover grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
                <span className="absolute bottom-5 left-5 size-2 bg-primary" />
              </div>
              <div className="flex items-start justify-between border-b border-line py-5">
                <h3 className="font-display text-2xl">{barber.name}</h3>
                <span className="max-w-28 text-right text-[10px] uppercase tracking-[0.18em] text-primary">{barber.specialty}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16">
        <SectionTitle eyebrow="Trabalhos recentes" title="Precisão que se revela em cada ângulo." />
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[310px_310px]">
          <figure className="group overflow-hidden md:col-span-4 md:row-span-2"><img src={fadeImage} alt="Corte masculino fade com acabamento preciso" width={1200} height={1504} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-[1.03]" /></figure>
          <figure className="group overflow-hidden md:col-span-8"><img src={beardImage} alt="Ritual de barba com navalha" width={1408} height={1008} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-[1.03]" /></figure>
          <figure className="group overflow-hidden md:col-span-4"><img src={textureImage} alt="Corte masculino texturizado contemporâneo" width={1200} height={1504} loading="lazy" className="size-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" /></figure>
          <figure className="relative flex min-h-72 items-center justify-center overflow-hidden border border-line bg-surface p-8 text-center md:col-span-4 md:min-h-0">
            <div className="absolute inset-5 border border-primary/15" />
            <blockquote className="relative font-display text-2xl leading-relaxed text-foreground">“Estilo não se impõe.<br/><span className="text-primary">Se revela.</span>”</blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [barber, setBarber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const next = () => {
    if (step === 1 && !service) return;
    if (step === 2 && !barber) return;
    if (step === 3 && (!date || !time)) return;
    if (step === 4) {
      const parsed = bookingSchema.safeParse({ name, phone });
      if (!parsed.success) {
        const fields = parsed.error.flatten().fieldErrors;
        setErrors({
          ...(fields.name?.[0] ? { name: fields.name[0] } : {}),
          ...(fields.phone?.[0] ? { phone: fields.phone[0] } : {}),
        });
        return;
      }
      setErrors({});
    }
    setStep((current) => Math.min(5, current + 1));
  };

  const reset = () => {
    setStep(1); setService(""); setBarber(""); setDate(""); setTime(""); setName(""); setPhone(""); setErrors({});
  };

  return (
    <section id="agendar" className="border-y border-line bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <SectionTitle eyebrow="Reserve seu momento" title="Seu próximo ritual começa aqui." align="center" />
        <div className="mt-14 glass-panel shadow-2xl shadow-background">
          <div className="grid grid-cols-5 border-b border-line">
            {["Serviço", "Especialista", "Horário", "Seus dados", "Concluído"].map((label, index) => {
              const number = index + 1;
              return (
                <div key={label} className={`relative px-2 py-5 text-center ${number <= step ? "text-primary" : "text-muted-foreground"}`}>
                  <span className="mx-auto flex size-7 items-center justify-center rounded-full border border-current text-[10px]">{number < step ? <Check className="size-3" /> : number}</span>
                  <span className="mt-2 hidden text-[9px] uppercase tracking-[0.14em] sm:block">{label}</span>
                  {number === step && <span className="absolute inset-x-0 bottom-0 h-px bg-primary" />}
                </div>
              );
            })}
          </div>

          <div className="min-h-[430px] p-6 sm:p-10 md:p-12">
            {step === 1 && (
              <Step heading="Escolha seu ritual" copy="Selecione a experiência que deseja viver.">
                <div className="grid gap-3 md:grid-cols-3">{services.map((item) => <Choice key={item.name} selected={service === item.name} onClick={() => setService(item.name)} title={item.name} detail={`${item.duration} · ${item.price}`} />)}</div>
              </Step>
            )}
            {step === 2 && (
              <Step heading="Escolha seu especialista" copy="Cada profissional possui uma assinatura única.">
                <div className="grid gap-3 md:grid-cols-3">{barbers.map((item) => <Choice key={item.name} selected={barber === item.name} onClick={() => setBarber(item.name)} title={item.name} detail={item.specialty} image={item.image} />)}</div>
              </Step>
            )}
            {step === 3 && (
              <Step heading="Data e horário" copy="Selecione uma das disponibilidades da semana.">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{dates.map((item) => { const value = `${item.day} ${item.month}`; return <button type="button" key={value} onClick={() => setDate(value)} className={`border p-4 text-center transition ${date === value ? "border-primary bg-primary/10" : "border-line hover:border-primary/50"}`}><span className="block text-[10px] tracking-[0.2em] text-muted-foreground">{item.weekday}</span><strong className="my-1 block font-display text-3xl font-normal">{item.day}</strong><span className="text-[10px] text-primary">{item.month}</span></button>; })}</div>
                <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">{times.map((item) => <button type="button" key={item} onClick={() => setTime(item)} className={`border px-2 py-3 text-xs transition ${time === item ? "border-primary bg-primary text-primary-foreground" : "border-line text-foreground hover:border-primary/50"}`}>{item}</button>)}</div>
              </Step>
            )}
            {step === 4 && (
              <Step heading="Seus dados" copy="Precisamos apenas do essencial para confirmar.">
                <div className="mx-auto max-w-xl space-y-6">
                  <label className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Nome completo
                    <Input value={name} onChange={(event) => setName(event.target.value)} maxLength={80} autoComplete="name" placeholder="Como podemos chamar você?" className="mt-2 h-12 rounded-none border-line bg-background/40 px-4 text-foreground" aria-invalid={!!errors.name} />
                    {errors.name && <span className="mt-2 block text-xs text-destructive">{errors.name}</span>}
                  </label>
                  <label className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Telefone / WhatsApp
                    <Input value={phone} onChange={(event) => setPhone(event.target.value)} maxLength={16} inputMode="tel" autoComplete="tel" placeholder="(11) 99999-9999" className="mt-2 h-12 rounded-none border-line bg-background/40 px-4 text-foreground" aria-invalid={!!errors.phone} />
                    {errors.phone && <span className="mt-2 block text-xs text-destructive">{errors.phone}</span>}
                  </label>
                </div>
              </Step>
            )}
            {step === 5 && (
              <div className="mx-auto flex max-w-xl flex-col items-center py-4 text-center">
                <div className="flex size-16 items-center justify-center rounded-full border border-primary text-primary"><Check className="size-7" /></div>
                <p className="mt-7 text-xs uppercase tracking-[0.24em] text-primary">Solicitação recebida</p>
                <h3 className="mt-3 font-display text-4xl">Obrigado, {name.split(" ")[0]}.</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Enviaremos a confirmação pelo WhatsApp. Até breve.</p>
                <div className="mt-8 w-full border-y border-line py-5 text-left text-sm">
                  <div className="flex justify-between gap-4"><span className="text-muted-foreground">Ritual</span><strong>{service}</strong></div>
                  <div className="mt-3 flex justify-between gap-4"><span className="text-muted-foreground">Especialista</span><strong>{barber}</strong></div>
                  <div className="mt-3 flex justify-between gap-4"><span className="text-muted-foreground">Data e hora</span><strong>{date}, {time}</strong></div>
                </div>
                <Button variant="luxuryOutline" className="mt-8" onClick={reset}>Novo agendamento</Button>
              </div>
            )}
          </div>

          {step < 5 && (
            <div className="flex items-center justify-between border-t border-line px-6 py-5 sm:px-10">
              <Button variant="ghost" onClick={() => setStep((current) => Math.max(1, current - 1))} disabled={step === 1}><ArrowLeft /> Voltar</Button>
              <Button variant="luxury" onClick={next}>{step === 4 ? "Confirmar" : "Continuar"} <ArrowRight /></Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Step({ heading, copy, children }: { heading: string; copy: string; children: React.ReactNode }) {
  return <div><div className="mb-8 text-center"><h3 className="font-display text-3xl">{heading}</h3><p className="mt-2 text-sm text-muted-foreground">{copy}</p></div>{children}</div>;
}

function Choice({ selected, onClick, title, detail, image }: { selected: boolean; onClick: () => void; title: string; detail: string; image?: string }) {
  return (
    <button type="button" onClick={onClick} className={`relative overflow-hidden border p-5 text-left transition ${selected ? "border-primary bg-primary/10" : "border-line bg-background/30 hover:border-primary/50"}`}>
      {image && <img src={image} alt="" width={1008} height={1264} loading="lazy" className="mb-4 h-24 w-full object-cover object-top grayscale" />}
      <span className="block font-display text-xl">{title}</span><span className="mt-2 block text-[10px] uppercase tracking-[0.14em] text-primary">{detail}</span>
      {selected && <Check className="absolute right-3 top-3 size-4 text-primary" />}
    </button>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:grid-cols-2 md:px-10 xl:px-16">
        <SectionTitle eyebrow="O manifesto" title="Menos excesso. Mais presença." />
        <div className="md:pt-16">
          <p className="font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl">Acreditamos que o verdadeiro luxo está no tempo dedicado, na técnica dominada e na atenção absoluta aos detalhes.</p>
          <p className="mt-7 max-w-xl text-sm font-light leading-7 text-muted-foreground">A Maison Barbier nasceu para ressignificar o cuidado masculino. Sem pressa, sem fórmulas prontas. Um ambiente reservado onde tradição e linguagem contemporânea se encontram.</p>
          <div className="mt-10 h-px w-full gold-rule" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-10 xl:px-16">
        <div><BrandMark /><p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">Cuidado masculino em sua forma mais precisa, contemporânea e pessoal.</p></div>
        <div><h3 className="text-xs uppercase tracking-[0.22em] text-primary">Visite a Maison</h3><p className="mt-5 flex gap-3 text-sm leading-relaxed text-muted-foreground"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> Rua Oscar Freire, 842<br/>Jardins · São Paulo — SP</p></div>
        <div><h3 className="text-xs uppercase tracking-[0.22em] text-primary">Horários</h3><p className="mt-5 flex gap-3 text-sm leading-relaxed text-muted-foreground"><Clock3 className="mt-0.5 size-4 shrink-0 text-primary" /> Terça a sexta · 09h–20h<br/>Sábado · 09h–18h</p></div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-6 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10 xl:px-16">
          <span>© 2026 Maison Barbier. Todos os direitos reservados.</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary"><Instagram className="size-4" /> Instagram</a>
          <span>Design com propósito</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <Booking />
      <About />
      <Footer />
    </main>
  );
}