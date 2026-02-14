import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ['@nuxt/ui',
    ['nuxt-i18n-micro', {
      locales: [
        { code: 'en', iso: 'en-US', name: 'English', dir: 'ltr' },
        { code: 'th', iso: 'th-TH', name: 'ไทย', dir: 'ltr' },
        { code: 'jp', iso: 'jp-JP', name: '日本語', dir: 'ltr' },
        { code: 'la', iso: 'lo-LA', name: 'ລາວ', dir: 'ltr' }
      ],
      defaultLocale: 'en', // ตั้งค่าภาษาเริ่มต้นเป็นอังกฤษ
      translationDir: 'app/locales', // โฟลเดอร์ที่เก็บไฟล์แปลภาษา
      meta: true, // เปิดใช้งานการจัดการ meta tags สำหรับ SEO
      autoDetectLanguage: false, // ปิดการตรวจจับภาษาของเบราว์เซอร์
      includeDefaultLocaleRoute: false, // ไม่รวมรหัสภาษาสำหรับภาษาเริ่มต้นใน URL
      types: 'all', // สร้างไทป์สำหรับทุกภาษา
      disablePageLocales: true, // ปิดการใช้งานการสร้างหน้าแยกตามภาษา
    }],
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