import { useContext } from "react";
import { LangContext } from "@/app/layout";
import Link from "next/link";

const content = {
  en: {
    brandName: "Austin",
    brandDescription:
      "Austin Education is a leading tutoring service in Australia, offering all-in-one tutorial services.",
    campuses: {
      heading: "Campuses",
      items: [
        { name: "Melbourne Box Hill Campus", anchor: "box-hill" },
        { name: "Melbourne Mount Waverley Campus", anchor: "mount-waverley" },
        { name: "Melbourne CBD Campus", anchor: "cbd" },
        { name: "Melbourne Point Cook Campus", anchor: "point-cook" },
        { name: "South Australia - Adelaide Campus", anchor: "adelaide" },
      ],
    },
    quickLinks: {
      heading: "Quick Links",
      items: [
        { name: "Courses", href: "/courses" },
        { name: "Trial Lesson", href: "/resource_hub?tab=trial" },
        { name: "FAQ", href: "/resource_hub?tab=consultation" },
      ],
    },
    contact: {
      heading: "Contact Us",
      email: "info@austinedu.com.au",
      phone: "0426800815",
    },
    copyright: "© 2025 Austin Education. All rights reserved.",
    terms: "Terms and Conditions",
  },
  zh: {
    brandName: "Austin",
    brandDescription:
      "澳升教育是澳大利亚领先的辅导机构，提供一站式辅导服务。",
    campuses: {
      heading: "校区",
      items: [
        { name: "Melbourne Box Hill Campus", anchor: "box-hill" },
        { name: "Melbourne Mount Waverley Campus", anchor: "mount-waverley" },
        { name: "Melbourne CBD Campus", anchor: "cbd" },
        { name: "Melbourne Point Cook Campus", anchor: "point-cook" },
        { name: "South Australia - Adelaide Campus", anchor: "adelaide" },
      ],
    },
    quickLinks: {
      heading: "快速链接",
      items: [
        { name: "课程", href: "/courses" },
        { name: "试课", href: "/resource_hub?tab=trial" },
        { name: "常见问题", href: "/resource_hub?tab=consultation" },
      ],
    },
    contact: {
      heading: "联系我们",
      email: "info@austinedu.com.au",
      phone: "0426800815",
    },
    copyright: "© 2025 Austin Education. 保留所有权利。",
    terms: "条款与条件",
  },
};

export default function Footer() {
  const { lang } = useContext(LangContext) || { lang: "en" };
  const locale = content[lang] || content.en;

  return (
    <footer className="bg-primary text-white py-10 mt-10 px-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 品牌描述 */}
        <div>
          <h3 className="text-2xl font-bold mb-3">{locale.brandName}</h3>
          <p className="text-sm text-gray-100 leading-relaxed">
            {locale.brandDescription}
          </p>
        </div>

        {/* 校区 - 跳转到联系我们页面的对应校区锚点 */}
        <div>
          <h4 className="text-xl font-semibold mb-3">
            {locale.campuses.heading}
          </h4>
          <ul className="space-y-2 text-sm">
            {locale.campuses.items.map((campus, index) => (
              <li key={index}>
                <Link 
                  href={`/contact_us#${campus.anchor}`} 
                  className="hover:underline transition-colors duration-200"
                >
                  {campus.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 快速链接 */}
        <div>
          <h4 className="text-xl font-semibold mb-3">
            {locale.quickLinks.heading}
          </h4>
          <ul className="space-y-2 text-sm">
            {locale.quickLinks.items.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href} 
                  className="hover:underline transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 联系我们 */}
        <div>
          <h4 className="text-xl font-semibold mb-3">
            {locale.contact.heading}
          </h4>
          <div className="space-y-2 text-sm">
            <p className="text-sm text-gray-100">
              <a 
                href={`mailto:${locale.contact.email}`} 
                className="hover:underline transition-colors duration-200"
              >
                {locale.contact.email}
              </a>
            </p>
            <p className="text-sm text-gray-100">
              <a 
                href={`tel:+61${locale.contact.phone}`} 
                className="hover:underline transition-colors duration-200"
              >
                {locale.contact.phone}
              </a>
            </p>
            <div className="mt-3 space-x-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61564205070622" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="oklch(0.967 0.003 264.542)"
                >
                  <title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/austin_education/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="oklch(0.967 0.003 264.542)"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </a>
              <a 
                href="https://www.xiaohongshu.com/user/profile/5f8530a60000000001009170?xsec_token=YBZb5VMK5C69gtRWeUkQH_MDZ3z8JrW0nZy1NI-sb6_o4=&xsec_source=app_share&xhsshare=CopyLink&appuid=6516875e0000000024015e06&apptime=1748498896&share_id=9e5544c57470457e935072c5de02477b" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Xiaohongshu" 
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FF2442"
                >
                  <title>Xiaohongshu</title>
                  <path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972.794.794 0 0 0-.884-.618.795.795 0 0 0-.692.794c0 .101-.002.666.001.777zm-11.509 4.808c-.203.001-1.353.004-1.685.003a2.528 2.528 0 0 1-.766-.126.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124.66.01 1.32.002 1.981 0 .01 0 .02-.006.023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01a.834.834 0 0 0-.01.08c-.027.397-.038.495-.234 3.06-.012.24-.034.389-.135.607-.026.057-.033.042.003.112.046.092.681 1.523.787 1.74.008.015.011.02.017.02.008 0 .033-.026.047-.044.147-.187.268-.391.371-.606.306-.635.44-1.325.486-1.706.014-.11.021-.22.03-.33l.204-2.616.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.427 1.427 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.443.443 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293c.076.982.153 1.964.233 2.946.05.4.186 1.085.487 1.706.103.215.223.419.37.606.015.018.037.051.048.049.02-.003.742-1.642.804-1.765.036-.07.03-.055.003-.112zm3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56c-.01 0-.02.006-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.534.534 0 0 0-.02.191.46.46 0 0 0 .23.378.981.981 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.53.53 0 0 0-.023.172.465.465 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001c.01 0 .02-.006.023-.015l.575-1.28a.025.025 0 0 0-.024-.035zm-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829 0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047.001.037.465 1.064.555 1.263.01.02.03.033.051.033.157.003.767.009.938-.014.153-.02.3-.06.438-.132.3-.156.49-.419.595-.765.052-.172.075-.353.075-.533.002-2.33 0-4.66-.007-6.991a.032.032 0 0 0-.032-.032zm11.784 6.896c0-.014-.01-.021-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084-.37 0-1.11-.002-1.304 0-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036c.006.01.013.008.058.008 1.748.003 3.495.002 5.243.002.03-.001.034-.006.035-.033v-1.539zm4.177-3.43c0 .013-.007.023-.02.024-.346.006-.692.004-1.037.004-.014-.002-.022-.01-.022-.024-.005-.434-.007-.869-.01-1.303 0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015.093.025.16.107.165.204.006.431.002 1.153.001 1.153zm2.67.244a1.953 1.953 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21c0-.132-.007-.263-.025-.394a1.823 1.823 0 0 0-.153-.53 1.533 1.533 0 0 0-.677-.71 2.167 2.167 0 0 0-1-.258c-.153-.003-.567 0-.72 0-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007c-.006.006-.008.012-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128V11.19s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003c.098 0 .191.02.28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185 0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033.184.437.374.871.57 1.303a.045.045 0 0 0 .04.026c.17.005.34.002.51.003.15-.002.517.004.666-.01a2.03 2.03 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981c0-.128-.01-.254-.034-.38 0 .078-.029-.641-.724-.998z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/austin-education/?originalSubdomain=au" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="oklch(0.967 0.003 264.542)"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 px-4">
        <div className="mt-8 text-center text-sm text-gray-200">
          {locale.copyright}
        </div>
        <div className="mt-8 text-center text-sm text-gray-200">
          <Link 
            href="/terms" 
            className="text-gray-200 hover:text-white hover:underline transition-colors duration-200"
          >
            {locale.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}