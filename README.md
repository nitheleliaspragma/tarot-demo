# ✦ Tarot — Revelación Digital

> **Una experiencia mística moderna**: lecturas de tarot personalizadas generadas dinámicamente con IA, donde las cartas hablan a través del poder de la composición textual procedural.

---

## 🌙 ¿Qué es Tarot?

Una aplicación web moderna y envolvente que te permite explorar la sabiduría de los 22 Arcanos Mayores del Tarot. Cada lectura es única, combinando:

- **22 Arcanos Mayores** con iconografía y significados profundos
- **Múltiples estructuras de lectura** adaptadas a diferentes contextos vitales
- **Interpretaciones dinámicas** generadas mediante algoritmos procedurales
- **Síntesis de voz** en español para una experiencia multisensorial
- **Diseño mobile-first** optimizado para cualquier dispositivo

### Diseñada para explorar:
- 🕰️ **Tiempo** — Pasado, presente y futuro
- ❤️ **Amor** — La dinámica relacional desde tres perspectivas
- 🌙 **Ciclo Menstrual** — Energía y consejo según tu fase actual (Menstruación, Folicular, Ovulación, Lútea)

---

## 🎮 Cómo Funciona

### 1️⃣ Elige tu Estructura
Selecciona qué tipo de lectura deseas. Cada estructura tiene su propia lógica narrativa y posiciones específicas.

### 2️⃣ Arrastra tus Cartas
Mediante drag & drop, coloca las cartas en los slots disponibles. La aplicación reconoce dinámicamente cuántas posiciones tiene tu estructura.

### 3️⃣ Revelar
Cuando todos los slots están llenos, presiona "Revelar" para ver la animación de las cartas y acceder a la interpretación.

### 4️⃣ Escucha tu Lectura
Lee o escucha la interpretación sintetizada en español, generada especialmente para tu combinación de cartas y estructura.

---

## ⚙️ La Estructura Procedural de las Lecturas

El corazón de Tarot es su **sistema de generación procedural de interpretaciones**. Aquí te explicamos cómo funciona:

### 🧩 Los Tres Pilares

Una lectura se compone de la intersección de tres elementos:

```
┌─────────────────────────────────────────────────┐
│         CARTA (Significado Base)                 │
│  ✦ Apertura (qué representa)                   │
│  ✦ Desarrollo (cómo se manifiesta)             │
│  ✦ Riesgo (la sombra o advertencia)            │
└─────────────────────────────────────────────────┘
                        ⊕
┌─────────────────────────────────────────────────┐
│      POSICIÓN (Rol en la Estructura)             │
│  ✦ Intro (contexto inicial)                    │
│  ✦ Cierre (síntesis y consecuencia)            │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│     INTERPRETACIÓN ÚNICA (Resultado)             │
│  "{intro} {apertura}, {desarrollo},             │
│   {riesgo}. {cierre}"                           │
└─────────────────────────────────────────────────┘
```

### 📊 Cómo se Genera una Interpretación

Cada interpretación se compone de **5 elementos textales seleccionados aleatoriamente**:

1. **Intro contextual** — Introduce el rol de la posición  
   *Ejemplo: "En el pasado,"*  
   *Alternativa: "Esto tiene su origen en"*

2. **Apertura de la carta** — El primer nivel de significado  
   *Ejemplo: "hay una sensación de confusión"*

3. **Desarrollo de la carta** — Cómo se expresa esa energía  
   *Ejemplo: "puede haber cosas que no se están diciendo directamente"*

4. **Riesgo de la carta** — La sombra o advertencia  
   *Ejemplo: "lo que puede llevar a malentendidos"*

5. **Cierre contextual** — Síntesis del impacto en esa posición  
   *Ejemplo: "y marcó el rumbo de la situación actual"*

### 📁 Arquitectura de Datos

Cada estructura tiene un archivo JSON que define:

```json
{
  "meta": {
    "estructura": "tiempo",
    "posiciones": ["pasado", "presente", "futuro"],
    "descripcion": "Interpretación basada en línea temporal"
  },
  "contexto": {
    "pasado": {
      "intro": ["En el pasado,", "Esto tiene su origen en"],
      "cierre": ["y marcó el rumbo actual.", "dejando una huella."]
    },
    "presente": { /* ... */ },
    "futuro": { /* ... */ }
  },
  "cartas": {
    "luna": {
      "nombre": "La Luna",
      "base": {
        "apertura": ["hay confusión", "algo no está claro"],
        "desarrollo": ["cosas no dichas", "interpretaciones equivocadas"],
        "riesgo": ["malentendidos", "dudas innecesarias"]
      }
    }
    /* ... más cartas ... */
  }
}
```

### 🔄 El Algoritmo de Composición

```javascript
// Pseudocódigo del engine
function interpretarCarta(carta, posicion, estructura) {
  const contexto = estructura.contexto[posicion];
  const base = carta.base;
  
  // Seleccionar aleatoriamente de cada lista
  return `${random(contexto.intro)} ${random(base.apertura)}, 
           ${random(base.desarrollo)}, ${random(base.riesgo)}. 
           ${random(contexto.cierre)}`;
}
```

**Resultado**: Cada combinación de (Carta × Posición) genera una frase única de 5 partes, logrando variedad y coherencia narrativa.

### 🎯 Ventajas de este Sistema

✅ **Variabilidad**: Con 22 cartas × 3 posiciones × múltiples frases, hay miles de interpretaciones posibles  
✅ **Coherencia**: Las frases están diseñadas para fluir naturalmente  
✅ **Modularidad**: Nuevas estructuras se crean solo con un archivo JSON  
✅ **Escalabilidad**: Agregar más cartas o posiciones es trivial  
✅ **Significado profundo**: Cada elemento textual representa un aspecto del significado de la carta  

---

## 🛠️ Tecnologías

- **Frontend**: JavaScript puro (vanilla) — sin frameworks
- **Estilos**: CSS3 con animaciones y efectos visuales
- **Audio**: Web Speech API para síntesis de voz en español
- **Datos**: JSON para estructuras y definiciones de cartas
- **Arquitectura**: Componentes modulares organizados por función

---

## 📱 Características

- ✦ **Mobile-first**: Optimizada para cualquier tamaño de pantalla
- 🎨 **Diseño Mystical**: Paleta oscura con acentos dorados y púrpuras
- 🔊 **Narración de Voz**: Escucha tus interpretaciones sintetizadas
- 🎴 **Drag & Drop Intuitivo**: Selecciona cartas de forma natural
- ⚡ **Rendimiento**: Cero dependencias externas, carga rápida
- 🌍 **Accesible**: Soporte para ARIA labels y navegación por teclado

---

## 🚀 Inicio Rápido

1. Abre `index.html` en tu navegador
2. Espera el splash de introducción (2.5 segundos)
3. Selecciona la estructura que deseas explorar
4. Arrastra 3 cartas a los slots disponibles
5. Presiona "Revelar" para ver la lectura
6. Lee o escucha tu interpretación
7. Presiona "Nueva tirada" para comenzar nuevamente

---

## 📂 Estructura del Proyecto

```
tarot/
├── index.html              # Página principal
├── index.css               # Estilos globales
├── index.js                # Punto de entrada
│
├── js/
│   ├── app.js              # Lógica principal de la aplicación
│   ├── engine.js           # Motor de interpretación procedural
│   ├── ui.js               # Gestión de UI y pantallas
│   ├── data.js             # Gestión de datos
│   ├── cards-map.js        # Mapeo visual de cartas
│   ├── cosmic-bg.js        # Efectos de fondo
│   ├── points.js           # Sistema de partículas
│   └── sfx.js              # Efectos de sonido
│
├── data/
│   ├── cartas.json         # Definición de los 22 Arcanos
│   ├── csv/                # Fuentes de datos en CSV
│   └── estructuras/        # JSON de cada estructura de lectura
│       ├── tiempo.json
│       ├── amor.json
│       └── ciclo_mujer_*.json
│
├── cards/                  # Imágenes de las cartas
├── sounds/                 # Archivos de audio
└── README.md               # Este archivo
```

---

## 💫 Visión Futura

- 🔮 **Más estructuras** de lectura personalizadas
- 🌐 **Multiidioma** más allá del español
- 📊 **Histórico de lecturas** guardadas localmente
- 🎯 **Interpretaciones contextuales** basadas en preguntas específicas
- 🤖 **Refinamiento IA** de significados

---

## 📖 Recursos

- [Documento de Diseño UX/UI](./tarot_design.md) — Mapeo completo de pantallas
- [Sistema de Interpretación](./tarot_mvp_full.md) — Detalles técnicos del motor

---

**Hecho con ✦ para explorar la sabiduría antigua a través de la tecnología moderna.**