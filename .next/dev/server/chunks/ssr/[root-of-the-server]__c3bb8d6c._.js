module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BRAND",
    ()=>BRAND,
    "FAQ_ITEMS",
    ()=>FAQ_ITEMS,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "PROCESS_STEPS",
    ()=>PROCESS_STEPS,
    "PRODUCTS",
    ()=>PRODUCTS,
    "SERVICES",
    ()=>SERVICES
]);
const BRAND = {
    name: "MaxMobille d.o.o.",
    slogan: "MaxMobille uvozi robu iz Kine za Balkan – od fabrike do isporuke, uz tim u Kini i potpunu sigurnost.",
    address: "Radnička 16, Srebrenik (75350)",
    email: "hari@kinauvoz.com",
    harun: {
        name: "Harun",
        phone: "+387 61 797 777",
        whatsapp: "38761797777",
        role: "Osnivač & Direktor – Balkan"
    },
    ellen: {
        name: "Ellen",
        phone: "+86 139 2484 5257",
        whatsapp: "8613924845257",
        role: "Menadžer nabave – Kina"
    }
};
const NAV_LINKS = [
    {
        href: "/",
        label: "Početna"
    },
    {
        href: "/usluge",
        label: "Usluge"
    },
    {
        href: "/proces",
        label: "Proces"
    },
    {
        href: "/tim",
        label: "Tim"
    },
    {
        href: "/faq",
        label: "FAQ"
    },
    {
        href: "/kontakt",
        label: "Kontakt"
    }
];
const SERVICES = [
    {
        id: "pronalazenje",
        icon: "Search",
        title: "Pronalaženje proizvođača",
        short: "Pristup tisućama verificiranih fabrika u Kini.",
        description: "Naš tim u Kini direktno posjećuje fabrike, provjerava kapacitete i certifikate te pronalazi najboljeg proizvođača za vaš proizvod i budžet. Koristimo naše poslovne kontakte kako bismo vam osigurali pouzdanog partnera."
    },
    {
        id: "pregovaranje",
        icon: "Handshake",
        title: "Pregovaranje cijena",
        short: "Postižemo cijene koje vi sami ne biste mogli.",
        description: "Zahvaljujući dugoročnim odnosima s kineskim proizvođačima i znanjem lokalnog tržišta, pregovaramo cijene i uvjete koji su daleko povoljniji od standardnih. Vaša ušteda je naš cilj."
    },
    {
        id: "kvalitet",
        icon: "ShieldCheck",
        title: "Kontrola kvaliteta",
        short: "Inspekcija robe prije ukrcaja u Kini.",
        description: "Ellen i naš kineski tim vrše detaljnu inspekciju robe u fabrici – provjera uzoraka, mjerenja, testiranja i fotografska dokumentacija. Roba koja ne zadovoljava vaše standarde ne napušta Kinu."
    },
    {
        id: "logistika",
        icon: "Ship",
        title: "Logistika i transport",
        short: "Morski, vazdušni ili cestovni transport.",
        description: "Organiziramo kompletan transport od fabrike u Kini do vaše lokacije na Balkanu. Radimo s provjerenim špediterima i pratimo pošiljku u svakom trenutku."
    },
    {
        id: "carina",
        icon: "FileText",
        title: "Carina i dokumentacija",
        short: "Kompletna carinska administracija za BiH i region.",
        description: "Pripremamo svu potrebnu dokumentaciju: fakture, packing liste, certifikate porijekla i carinske deklaracije. Surađujemo s licenciranim carinskim agentima koji osiguravaju bezproblematičan uvoz."
    },
    {
        id: "isporuka",
        icon: "Truck",
        title: "Isporuka",
        short: "Roba isporučena na vašu adresu.",
        description: "Organiziramo finalnu distribuciju robe na vašu adresu ili skladište. Pratite svoju pošiljku u realnom vremenu i primite robu zajedno s kompletnom dokumentacijom."
    }
];
const PROCESS_STEPS = [
    {
        number: "01",
        title: "Konsultacija",
        description: "Kontaktirate nas putem WhatsApp-a ili email-a. Razgovaramo o vašem proizvodu, količinama i budžetu. Bez obaveza."
    },
    {
        number: "02",
        title: "Pronalaženje dobavljača",
        description: "Naš tim u Kini pretražuje tržište i identificira verificirane proizvođače koji odgovaraju vašim zahtjevima."
    },
    {
        number: "03",
        title: "Uzorci i pregovaranje",
        description: "Naručujemo uzorke za provjeru kvaliteta i pregovaramo najpovoljnije cijene i uvjete plaćanja."
    },
    {
        number: "04",
        title: "Narudžba i kontrola",
        description: "Nakon vaše potvrde, plasiramo narudžbu. Tokom produkcije vršimo inspekciju i šaljemo foto/video izvještaje."
    },
    {
        number: "05",
        title: "Transport i carina",
        description: "Organiziramo šipment, pratimo robu do carinarnice i osiguravamo brz i bezproblematičan carinski postupak."
    },
    {
        number: "06",
        title: "Isporuka",
        description: "Roba stiže na vašu adresu zajedno s kompletnom dokumentacijom. Vaš posao završen – naš posao obavljen."
    }
];
const PRODUCTS = [
    {
        id: "bilijar",
        title: "Bilijar stolovi",
        description: "Profesionalni bilijar stolovi iz kineskih fabrika po fabričkim cijenama. Dostupni u raznim veličinama i završnim obradama za ugostiteljske objekte, sportske klubove i privatnu upotrebu.",
        image: "/images/bilijar.jpg",
        alt: "Profesionalni bilijar sto uvoz iz Kine"
    },
    {
        id: "fitness",
        title: "Fitness oprema",
        description: "Kompletan asortiman fitness opreme – od kardio mašina do slobodnih tegova i kablovskih stanica. Idealno za fitness centre, hotele i korporativne sale.",
        image: "/images/fitness.jpg",
        alt: "Fitness oprema uvoz iz Kine za Balkan"
    },
    {
        id: "citroen",
        title: "Citroën C1 2016",
        description: "Gradski automobil s niskom potrošnjom i kompaktnim dimenzijama. Idealan za svakodnevnu vožnju u gradu. Uvezen direktno, uz kompletnu dokumentaciju i CarPass izvještaj.",
        image: "/images/citroen-c1.jpg",
        alt: "Citroen C1 2016 uvoz automobila"
    },
    {
        id: "range-rover",
        title: "Range Rover Evoque 2015",
        description: "Premium kompaktni SUV s luksuznom opremom i svakodnevnom upotrebljivošću. Dostupan u više konfiguracija. Uvezen s certifikatima i potpunom tehničkom historijom.",
        image: "/images/range-rover.jpg",
        alt: "Range Rover Evoque 2015 uvoz automobila"
    },
    {
        id: "kamini",
        title: "Kamini na etanol",
        description: "Moderni bioetanol kamini koji ne zahtijevaju dimnjak ni instalaciju. Idealni za ugostiteljske objekte, stanove i poslovne prostore. Čisto gorenje, elegantan dizajn.",
        image: "/images/kamini.jpg",
        alt: "Kamini na etanol bioetanol uvoz iz Kine"
    },
    {
        id: "masazni-kreveti",
        title: "Masažni kreveti",
        description: "Profesionalni masažni kreveti za salone, hotele i fizioterapeutske ordinacije. Visoka nosivost, memorijska pjena, ergonomski dizajn. Dostupni u raznim konfiguracijama.",
        image: "/images/masazni-kreveti.jpg",
        alt: "Profesionalni masažni kreveti uvoz iz Kine"
    },
    {
        id: "masine-snijeg",
        title: "Mašine za čišćenje snijega",
        description: "Profesionalne mašine za čišćenje snijega za komunalna preduzeća, hotele i ski centre. Robusna konstrukcija, pouzdani motori, servisna podrška uključena.",
        image: "/images/masine-snijeg.jpg",
        alt: "Mašine za čišćenje snijega uvoz iz Kine Balkan"
    }
];
const FAQ_ITEMS = [
    {
        question: "Koliko traje uvoz iz Kine?",
        answer: "Morskim putem (FCL/LCL kontejner) transport traje 35–45 dana. Vazdušnim transportom 5–10 dana. Ukupan proces od narudžbe do isporuke, uključujući produkciju i carinu, traje prosječno 60–90 dana. Svaki slučaj je individualan i dajemo vam preciznu procjenu na konsultaciji."
    },
    {
        question: "Koja je minimalna količina narudžbe?",
        answer: "Nema fiksnog minimuma – radimo i na manjim narudžbama i na velikim kontejnerskim pošiljkama. Za male količine kombiniramo pošiljke (LCL) kako bi troškovi bili prihvatljivi. Kontaktirajte nas sa vašim specifičnim zahtjevom."
    },
    {
        question: "Kako se vrši plaćanje?",
        answer: "Standardno plaćanje kineskim dobavljačima je 30% avansa i 70% pred šipment. Plaćanje se vrši bankovnim transferom (T/T). Naša naknada za usluge se dogovara individualno i naplaćuje se odvojeno. Transparentno prikazujemo sve troškove unaprijed."
    },
    {
        question: "Šta ako roba ne odgovara standardima?",
        answer: "Upravo zbog toga vršimo inspekciju u Kini prije šipmenta. Ako se otkriju problemi, zaustavljamo pošiljku i tražimo zamjenu ili kompenzaciju od dobavljača. Radimo isključivo s verificiranim fabrikama. U slučaju oštećenja u transportu, rješavamo osiguravajuće zahtjeve."
    },
    {
        question: "Da li imate vlastiti tim u Kini?",
        answer: "Da – Ellen je naš menadžer nabave sa sjedištem u Kini. Ona direktno komunicira s fabrikama, vrši inspekcije i prati produkciju. To je naša ključna prednost u odnosu na agente koji rade samo online."
    },
    {
        question: "Koje vrste robe možete uvesti?",
        answer: "Uvozimo gotovo sve kategorije: elektroniku, strojeve, namještaj, sportsku opremu, automobile, industrijsku opremu, tekstil i mnogo više. Jedino ograničenje su zakonski propisi o uvozu u BiH i EU. Za specifičan proizvod, pitajte nas."
    },
    {
        question: "Da li pomažete s carinjenjem?",
        answer: "Da – carina i dokumentacija su dio naše usluge. Surađujemo s licenciranim carinskim agentima u BiH koji znaju sve specifičnosti uvoza iz Kine. Pripremamo kompletnu dokumentaciju: fakture, certifikate porijekla, packing liste i carinske deklaracije."
    },
    {
        question: "Mogu li pratiti gdje se nalazi moja pošiljka?",
        answer: "Apsolutno. Dajemo vam tracking broj i pratite pošiljku u realnom vremenu putem online sustava. Pored toga, redovno vas informiramo o statusu – niste sami u tom procesu."
    },
    {
        question: "Radite li samo za BiH ili cijeli Balkan?",
        answer: "Radimo za cijeli Balkan – BiH, Srbiju, Hrvatsku, Sloveniju, Crnu Goru, Sjevernu Makedoniju i Albaniju. Naše iskustvo u carinjenju pokriva različite regulatorne okvire regije."
    },
    {
        question: "Kako započeti saradnju?",
        answer: "Pošaljite nam poruku na WhatsApp (+387 61 797 777) ili email (hari@kinauvoz.com). Opišite što trebate – proizvod, količinu, budžet. U roku od 24 sata ćemo vam dati odgovor i besplatnu inicijalnu procjenu."
    }
];
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Navigation() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100" : "bg-blue-900/40 backdrop-blur-sm border-b border-white/10"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xl font-bold transition-colors", scrolled ? "text-blue-700" : "text-white"),
                                    children: "MaxMobille"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs hidden sm:block transition-colors", scrolled ? "text-gray-500" : "text-blue-200"),
                                    children: "d.o.o."
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors", scrolled ? pathname === link.href ? "text-blue-700" : "text-gray-600 hover:text-blue-700" : pathname === link.href ? "text-white font-semibold" : "text-blue-100 hover:text-white"),
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].harun.whatsapp}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold px-4 py-2 rounded-lg transition-colors", scrolled ? "bg-blue-700 text-white hover:bg-blue-800" : "bg-white/15 border border-white/40 text-white hover:bg-white/25"),
                                children: "WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("md:hidden p-2 transition-colors", scrolled ? "text-gray-600" : "text-white"),
                            onClick: ()=>setIsOpen(!isOpen),
                            "aria-label": "Toggle menu",
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 85,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 85,
                                columnNumber: 41
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navigation.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navigation.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-white border-t border-gray-100 px-4 pb-4",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("block py-3 text-sm font-medium border-b border-gray-50 transition-colors", pathname === link.href ? "text-blue-700" : "text-gray-600 hover:text-blue-700"),
                            onClick: ()=>setIsOpen(false),
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].harun.whatsapp}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "mt-3 block text-center bg-blue-700 text-white text-sm font-semibold px-4 py-3 rounded-lg",
                        children: "Kontaktiraj na WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navigation.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navigation.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/WhatsAppFloat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppFloat",
    ()=>WhatsAppFloat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function WhatsAppFloat() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
        href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].harun.whatsapp}`,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Kontaktiraj na WhatsApp",
        initial: {
            scale: 0,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        transition: {
            delay: 2,
            type: "spring",
            stiffness: 260,
            damping: 20
        },
        whileHover: {
            scale: 1.1
        },
        className: "fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                size: 26,
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/components/WhatsAppFloat.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute w-full h-full rounded-full bg-green-400 animate-ping opacity-30"
            }, void 0, false, {
                fileName: "[project]/components/WhatsAppFloat.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WhatsAppFloat.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c3bb8d6c._.js.map