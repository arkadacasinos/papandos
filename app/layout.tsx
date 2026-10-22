import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <title>Панда Казино — Panda Casino официальный сайт: играть онлайн, рабочее зеркало</title>
        <meta
          name="description"
          content="Panda Casino официальный сайт приглашает играть онлайн: 5000+ слотов, бонус до 225% и 1500 ФС на первый депозит. Панда Казино зеркало рабочее на сегодня — быстрый вход, регистрация и выплаты 24/7."
        />
        <link rel="canonical" href="https://pandacasino.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0b0e11" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pandacasino.vercel.app/" />
        <meta property="og:title" content="Панда Казино — Panda Casino официальный сайт: играть онлайн, рабочее зеркало" />
        <meta
          property="og:description"
          content="Panda Casino официальный сайт приглашает играть онлайн: 5000+ слотов, бонус до 225% и 1500 ФС на первый депозит. Панда Казино зеркало рабочее на сегодня — быстрый вход, регистрация и выплаты 24/7."
        />
        <meta property="og:image" content="https://pandacasino.vercel.app/img/hero-panda.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Панда Казино — Panda Casino официальный сайт: играть онлайн, рабочее зеркало" />
        <meta
          name="twitter:description"
          content="Panda Casino официальный сайт приглашает играть онлайн: 5000+ слотов, бонус до 225% и 1500 ФС на первый депозит. Панда Казино зеркало рабочее на сегодня — быстрый вход, регистрация и выплаты 24/7."
        />
        <meta name="twitter:image" content="https://pandacasino.vercel.app/img/hero-panda.jpg" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap" rel="stylesheet" />

      </head>
      <body>{children}</body>
    </html>
  )
}
