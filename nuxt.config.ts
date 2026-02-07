import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxt/ui',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: '200..700',
        Anuphan: ['400', '500'],
      },
      display: 'swap', // ใช้ค่า display เป็น swap สำหรับประสิทธิภาพที่ดีขึ้น
      preload: true, // เปิดใช้งาน preload เพือประสิทธิภาพที่ดีขึ้น
      prefetch: true, // เปิดใช้งาน prefetch เพื่อประสิทธิภาพที่ดีขึ้น
      preconnect: true, // เปิดใช้งาน preconnect เพื่อประสิทธิภาพที่ดีขึ้น
      download: true, // ดาวน์โหลดฟอนต์ไปยังโครงการของคุณ
      inject: true, // ฝังฟอนต์ใน CSS ของคุณ
    }]
  ],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})