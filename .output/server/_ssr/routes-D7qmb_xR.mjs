import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Instagram, c as ArrowRight, i as MapPin, l as ArrowLeft, n as Scissors, o as Clock3, r as Menu, s as Check, t as X } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D7qmb_xR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			luxury: "border border-primary bg-primary text-primary-foreground shadow-luxury hover:bg-primary-bright",
			luxuryOutline: "border border-primary/55 bg-transparent text-foreground hover:border-primary hover:bg-primary/10",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var hero_barber_default = "/assets/hero-barber-BCSARQos.jpg";
var barber_mateus_default = "/assets/barber-mateus-CfjLd_h9.jpg";
var barber_rafael_default = "/assets/barber-rafael-DfzJyItI.jpg";
var barber_lucas_default = "/assets/barber-lucas-Dv7oIeuZ.jpg";
var gallery_fade_default = "/assets/gallery-fade-DEnyVTBG.jpg";
var gallery_beard_default = "/assets/gallery-beard-Cl-gTYeh.jpg";
var gallery_texture_default = "/assets/gallery-texture-CeTr1vWX.jpg";
var services = [
	{
		name: "Corte Signature",
		price: "R$ 95",
		duration: "50 min",
		description: "Consultoria de visagismo, corte de precisão e finalização autoral."
	},
	{
		name: "Barba Terapia",
		price: "R$ 75",
		duration: "40 min",
		description: "Toalha quente, óleos essenciais e desenho impecável com navalha."
	},
	{
		name: "Combo Royal",
		price: "R$ 155",
		duration: "90 min",
		description: "O ritual completo da casa: cabelo, barba, terapia e acabamento."
	}
];
var barbers = [
	{
		name: "Mateus Alves",
		specialty: "Fades & Visagismo",
		image: barber_mateus_default
	},
	{
		name: "Rafael Nobre",
		specialty: "Barbas & Clássicos",
		image: barber_rafael_default
	},
	{
		name: "Lucas Motta",
		specialty: "Texturas & Tendências",
		image: barber_lucas_default
	}
];
var dates = [
	{
		weekday: "TER",
		day: "22",
		month: "SET"
	},
	{
		weekday: "QUA",
		day: "23",
		month: "SET"
	},
	{
		weekday: "QUI",
		day: "24",
		month: "SET"
	},
	{
		weekday: "SEX",
		day: "25",
		month: "SET"
	}
];
var times = [
	"09:00",
	"10:30",
	"13:00",
	"14:30",
	"16:00",
	"18:30"
];
var bookingSchema = objectType({
	name: stringType().trim().min(3, "Informe seu nome completo.").max(80),
	phone: stringType().trim().regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Informe um WhatsApp válido com DDD.")
});
function scrollToBooking() {
	document.querySelector("#agendar")?.scrollIntoView({ behavior: "smooth" });
}
function BrandMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#inicio",
		className: "group flex items-center gap-3",
		"aria-label": "Maison Barbier — início",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-9 rotate-45 items-center justify-center border border-primary/70 transition-colors group-hover:bg-primary/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "-rotate-45 font-display text-lg text-primary",
				children: "D"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "block font-display text-xl font-normal text-foreground",
				children: "Daniel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-[8px] font-medium uppercase tracking-[0.34em] text-primary",
				children: "Barbier"
			})]
		})]
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const links = [
		["Serviços", "#servicos"],
		["Colaboradores", "#colaboradores"],
		["Galeria", "#galeria"],
		["Sobre", "#sobre"],
		["Contato", "#contato"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 xl:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Navegação principal",
					children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary",
						children: label
					}, href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "luxury",
						size: "lg",
						onClick: scrollToBooking,
						children: "Agendar horário"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "lg:hidden",
					onClick: () => setOpen(!open),
					"aria-label": open ? "Fechar menu" : "Abrir menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "glass-panel border-x-0 border-t-0 px-5 py-6 lg:hidden",
			"aria-label": "Navegação móvel",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-5",
				children: [links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					onClick: () => setOpen(false),
					className: "text-sm uppercase tracking-[0.18em] text-foreground",
					children: label
				}, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "luxury",
					size: "lg",
					onClick: () => {
						setOpen(false);
						scrollToBooking();
					},
					children: "Agendar horário"
				})]
			})
		})]
	});
}
function SectionTitle({ eyebrow, title, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-5 text-xs font-medium uppercase tracking-[0.28em] text-primary",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-balance font-display text-4xl font-normal leading-tight text-foreground md:text-6xl",
			children: title
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative flex min-h-[92vh] items-end overflow-hidden pt-20 md:min-h-[900px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_barber_default,
				alt: "Barbeiro realizando um corte fade de precisão",
				width: 1600,
				height: 1104,
				className: "hero-image absolute inset-0 size-full object-cover object-[66%_center]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,var(--background)_4%,color-mix(in_oklab,var(--background)_88%,transparent)_38%,color-mix(in_oklab,var(--background)_18%,transparent)_76%),linear-gradient(0deg,var(--background)_0%,transparent_48%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24 xl:px-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal-up max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-7 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium uppercase tracking-[0.32em] text-primary",
								children: "Barbearia contemporânea · São Paulo"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-balance font-display text-6xl font-normal leading-[0.98] text-foreground sm:text-7xl md:text-[6.5rem]",
							children: ["A arte do cuidado ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "masculino."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-xl text-base font-light leading-relaxed text-foreground/75 md:text-lg",
							children: "Técnica, precisão e rituais de cuidado em uma experiência criada para homens que reconhecem o valor dos detalhes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "luxury",
								size: "lg",
								className: "h-12 px-7",
								onClick: scrollToBooking,
								children: ["Agendar agora ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "luxuryOutline",
								size: "lg",
								className: "h-12 px-7",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#servicos",
									children: "Conhecer serviços"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex items-center gap-7 text-xs text-muted-foreground md:absolute md:bottom-24 md:right-16 md:mt-0 md:[writing-mode:vertical-rl]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Desde 2018" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-primary/50 md:h-12 md:w-px" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Excelência em cada detalhe" })
					]
				})]
			})
		]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicos",
		className: "border-t border-line py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Rituais da casa",
					title: "Serviços desenhados para a sua melhor versão."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-relaxed text-muted-foreground",
					children: "Cada atendimento começa com uma conversa e termina com uma assinatura única."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-px bg-line md:grid-cols-3",
				children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group bg-background p-8 transition-colors hover:bg-surface md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-2xl text-primary/40",
								children: ["0", index + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scissors, {
								className: "size-5 text-primary transition-transform duration-500 group-hover:rotate-45",
								strokeWidth: 1.2
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-20 font-display text-3xl text-foreground",
							children: service.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 min-h-12 text-sm leading-relaxed text-muted-foreground",
							children: service.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-end justify-between border-t border-line pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.16em] text-muted-foreground",
								children: service.duration
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-primary",
								children: service.price
							})]
						})
					]
				}, service.name))
			})]
		})
	});
}
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "colaboradores",
		className: "bg-surface py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Nossos especialistas",
				title: "Mestres no ofício. Autores do seu estilo.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:grid-cols-3",
				children: barbers.map((barber) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] overflow-hidden border border-line bg-background",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: barber.image,
								alt: `${barber.name}, especialista em ${barber.specialty}`,
								width: 1008,
								height: 1264,
								loading: "lazy",
								className: "size-full object-cover grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-5 left-5 size-2 bg-primary" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between border-b border-line py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: barber.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "max-w-28 text-right text-[10px] uppercase tracking-[0.18em] text-primary",
							children: barber.specialty
						})]
					})]
				}, barber.name))
			})]
		})
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "galeria",
		className: "py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Trabalhos recentes",
				title: "Precisão que se revela em cada ângulo."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[310px_310px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "group overflow-hidden md:col-span-4 md:row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: gallery_fade_default,
							alt: "Corte masculino fade com acabamento preciso",
							width: 1200,
							height: 1504,
							loading: "lazy",
							className: "size-full object-cover transition duration-700 group-hover:scale-[1.03]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "group overflow-hidden md:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: gallery_beard_default,
							alt: "Ritual de barba com navalha",
							width: 1408,
							height: 1008,
							loading: "lazy",
							className: "size-full object-cover transition duration-700 group-hover:scale-[1.03]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "group overflow-hidden md:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: gallery_texture_default,
							alt: "Corte masculino texturizado contemporâneo",
							width: 1200,
							height: 1504,
							loading: "lazy",
							className: "size-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "relative flex min-h-72 items-center justify-center overflow-hidden border border-line bg-surface p-8 text-center md:col-span-4 md:min-h-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-5 border border-primary/15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "relative font-display text-2xl leading-relaxed text-foreground",
							children: [
								"“Estilo não se impõe.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Se revela."
								}),
								"”"
							]
						})]
					})
				]
			})]
		})
	});
}
function Booking() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [service, setService] = (0, import_react.useState)("");
	const [barber, setBarber] = (0, import_react.useState)("");
	const [date, setDate] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const next = () => {
		if (step === 1 && !service) return;
		if (step === 2 && !barber) return;
		if (step === 3 && (!date || !time)) return;
		if (step === 4) {
			const parsed = bookingSchema.safeParse({
				name,
				phone
			});
			if (!parsed.success) {
				const fields = parsed.error.flatten().fieldErrors;
				setErrors({
					...fields.name?.[0] ? { name: fields.name[0] } : {},
					...fields.phone?.[0] ? { phone: fields.phone[0] } : {}
				});
				return;
			}
			setErrors({});
		}
		setStep((current) => Math.min(5, current + 1));
	};
	const reset = () => {
		setStep(1);
		setService("");
		setBarber("");
		setDate("");
		setTime("");
		setName("");
		setPhone("");
		setErrors({});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "agendar",
		className: "border-y border-line bg-surface py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Reserve seu momento",
				title: "Seu próximo ritual começa aqui.",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 glass-panel shadow-2xl shadow-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-5 border-b border-line",
						children: [
							"Serviço",
							"Especialista",
							"Horário",
							"Seus dados",
							"Concluído"
						].map((label, index) => {
							const number = index + 1;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative px-2 py-5 text-center ${number <= step ? "text-primary" : "text-muted-foreground"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-auto flex size-7 items-center justify-center rounded-full border border-current text-[10px]",
										children: number < step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 hidden text-[9px] uppercase tracking-[0.14em] sm:block",
										children: label
									}),
									number === step && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 bottom-0 h-px bg-primary" })
								]
							}, label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-h-[430px] p-6 sm:p-10 md:p-12",
						children: [
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
								heading: "Escolha seu ritual",
								copy: "Selecione a experiência que deseja viver.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 md:grid-cols-3",
									children: services.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
										selected: service === item.name,
										onClick: () => setService(item.name),
										title: item.name,
										detail: `${item.duration} · ${item.price}`
									}, item.name))
								})
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
								heading: "Escolha seu especialista",
								copy: "Cada profissional possui uma assinatura única.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-3 md:grid-cols-3",
									children: barbers.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
										selected: barber === item.name,
										onClick: () => setBarber(item.name),
										title: item.name,
										detail: item.specialty,
										image: item.image
									}, item.name))
								})
							}),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Step, {
								heading: "Data e horário",
								copy: "Selecione uma das disponibilidades da semana.",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
									children: dates.map((item) => {
										const value = `${item.day} ${item.month}`;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setDate(value),
											className: `border p-4 text-center transition ${date === value ? "border-primary bg-primary/10" : "border-line hover:border-primary/50"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-[10px] tracking-[0.2em] text-muted-foreground",
													children: item.weekday
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "my-1 block font-display text-3xl font-normal",
													children: item.day
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-primary",
													children: item.month
												})
											]
										}, value);
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6",
									children: times.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setTime(item),
										className: `border px-2 py-3 text-xs transition ${time === item ? "border-primary bg-primary text-primary-foreground" : "border-line text-foreground hover:border-primary/50"}`,
										children: item
									}, item))
								})]
							}),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
								heading: "Seus dados",
								copy: "Precisamos apenas do essencial para confirmar.",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mx-auto max-w-xl space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-xs uppercase tracking-[0.16em] text-muted-foreground",
										children: [
											"Nome completo",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: name,
												onChange: (event) => setName(event.target.value),
												maxLength: 80,
												autoComplete: "name",
												placeholder: "Como podemos chamar você?",
												className: "mt-2 h-12 rounded-none border-line bg-background/40 px-4 text-foreground",
												"aria-invalid": !!errors.name
											}),
											errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-2 block text-xs text-destructive",
												children: errors.name
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-xs uppercase tracking-[0.16em] text-muted-foreground",
										children: [
											"Telefone / WhatsApp",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: phone,
												onChange: (event) => setPhone(event.target.value),
												maxLength: 16,
												inputMode: "tel",
												autoComplete: "tel",
												placeholder: "(11) 99999-9999",
												className: "mt-2 h-12 rounded-none border-line bg-background/40 px-4 text-foreground",
												"aria-invalid": !!errors.phone
											}),
											errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-2 block text-xs text-destructive",
												children: errors.phone
											})
										]
									})]
								})
							}),
							step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto flex max-w-xl flex-col items-center py-4 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex size-16 items-center justify-center rounded-full border border-primary text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-7" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-7 text-xs uppercase tracking-[0.24em] text-primary",
										children: "Solicitação recebida"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "mt-3 font-display text-4xl",
										children: [
											"Obrigado, ",
											name.split(" ")[0],
											"."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-relaxed text-muted-foreground",
										children: "Enviaremos a confirmação pelo WhatsApp. Até breve."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 w-full border-y border-line py-5 text-left text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Ritual"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: service })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Especialista"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: barber })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Data e hora"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
													date,
													", ",
													time
												] })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "luxuryOutline",
										className: "mt-8",
										onClick: reset,
										children: "Novo agendamento"
									})
								]
							})
						]
					}),
					step < 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-t border-line px-6 py-5 sm:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: () => setStep((current) => Math.max(1, current - 1)),
							disabled: step === 1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {}), " Voltar"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "luxury",
							onClick: next,
							children: [
								step === 4 ? "Confirmar" : "Continuar",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							]
						})]
					})
				]
			})]
		})
	});
}
function Step({ heading, copy, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-3xl",
			children: heading
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: copy
		})]
	}), children] });
}
function Choice({ selected, onClick, title, detail, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `relative overflow-hidden border p-5 text-left transition ${selected ? "border-primary bg-primary/10" : "border-line bg-background/30 hover:border-primary/50"}`,
		children: [
			image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				width: 1008,
				height: 1264,
				loading: "lazy",
				className: "mb-4 h-24 w-full object-cover object-top grayscale"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block text-[10px] uppercase tracking-[0.14em] text-primary",
				children: detail
			}),
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "absolute right-3 top-3 size-4 text-primary" })
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "py-24 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] gap-16 px-5 md:grid-cols-2 md:px-10 xl:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "O manifesto",
				title: "Menos excesso. Mais presença."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl",
						children: "Acreditamos que o verdadeiro luxo está no tempo dedicado, na técnica dominada e na atenção absoluta aos detalhes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-xl text-sm font-light leading-7 text-muted-foreground",
						children: "A Maison Barbier nasceu para ressignificar o cuidado masculino. Sem pressa, sem fórmulas prontas. Um ambiente reservado onde tradição e linguagem contemporânea se encontram."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-px w-full gold-rule" })
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contato",
		className: "border-t border-line bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-10 xl:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground",
					children: "Cuidado masculino em sua forma mais precisa, contemporânea e pessoal."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs uppercase tracking-[0.22em] text-primary",
					children: "Visite a Maison"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 flex gap-3 text-sm leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
						" Rua Oscar Freire, 842",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Jardins · São Paulo — SP"
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs uppercase tracking-[0.22em] text-primary",
					children: "Horários"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 flex gap-3 text-sm leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
						" Terça a sexta · 09h–20h",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Sábado · 09h–18h"
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-6 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-10 xl:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Maison Barbier. Todos os direitos reservados." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://instagram.com",
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center gap-2 transition-colors hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" }), " Instagram"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Design com propósito" })
				]
			})
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Booking, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
