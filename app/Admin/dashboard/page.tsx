import Sidebar from "@/app/component/side-bar";
import { Bell, Settings, TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    label: "Revenue",
    value: "$24,300",
    delta: "+12% this month",
    up: true,
    icon: "💰",
  },
  {
    label: "Orders",
    value: "1,840",
    delta: "+8% this month",
    up: true,
    icon: "🧾",
  },
  {
    label: "Customers",
    value: "640",
    delta: "+5% this month",
    up: true,
    icon: "👥",
  },
  {
    label: "Products",
    value: "86",
    delta: "-2 this month",
    up: false,
    icon: "📦",
  },
];

const recentOrders = [
  {
    id: "#4021",
    customer: "Tunde Adeyemi",
    items: 3,
    total: "$42.00",
    status: "Delivered",
  },
  {
    id: "#4020",
    customer: "Fatima Bello",
    items: 1,
    total: "$15.50",
    status: "Pending",
  },
  {
    id: "#4019",
    customer: "Chidi Okafor",
    items: 5,
    total: "$87.00",
    status: "Delivered",
  },
  {
    id: "#4018",
    customer: "Ngozi Eze",
    items: 2,
    total: "$31.00",
    status: "Cancelled",
  },
  {
    id: "#4017",
    customer: "Emeka Nwosu",
    items: 4,
    total: "$60.00",
    status: "Pending",
  },
];

const topProducts = [
  { name: "Prada Route", sold: 243, revenue: "$4,374", image: <img className="rounded-[6px] w-full h-full object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags/cross/route_1.jpg" alt="" /> },
  { name: "Leather Soft Bags", sold: 187, revenue: "$3,366", image: <img className="rounded-[6px] w-full h-full object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/soft_bag_1.jpg" alt="" /> },
  { name: "Prada Brique", sold: 152, revenue: "$2,128", image: <img className="rounded-[6px] w-full h-full object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/brique_2.jpg" alt="" /> },
  { name: "Prada Re-Nylon Backpack", sold: 98, revenue: "$1,470", image: <img className="rounded-[6px] w-full h-full object-cover" src="https://www.prada.com/content/dam/pradaspa/ecommerce/2026/05/bags_essentials_men/cross/backpacks_1.jpg" alt="" /> },
  { name: "Prada Explore leather shoulder bag", sold: 50, revenue: "$1,070", image: <img className="rounded-[6px] w-full h-full object-cover" src="https://www.prada.com/content/dam/pradabkg_products/2/2VH/2VH204/2HE8F0002/2VH204_2HE8_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg" alt="" />}
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-50 text-green-800",
  Pending: "bg-amber-50 text-amber-800",
  Cancelled: "bg-red-50 text-red-800",
};

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 overflow-x-hidden">
        {/* Header */}
        <div className="flex flex-row items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-[17px] font-medium text-gray-900">Dashboard</h1>
            <p className="text-[12px] text-gray-400 mt-0.5">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-lg border border-gray-100 bg-white flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors">
              <Bell size={15} />
            </button>
            <button className="w-8 h-8 rounded-lg border border-gray-100 bg-white flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors">
              <Settings size={15} />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4"
            >
              <div className="flex justify-between items-start mb-1.5">
                <p className="text-[11px] text-gray-400">{s.label}</p>
                <span className="text-sm" role="img" aria-label={s.label}>{s.icon}</span>
              </div>
              <p className="text-[18px] sm:text-[20px] font-medium text-gray-900">{s.value}</p>
              <p
                className={`text-[10px] mt-1 flex items-center gap-1 ${s.up ? "text-green-700" : "text-red-700"}`}
              >
                {s.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                {s.delta}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row Blocks */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-3">
          
          {/* Recent Orders Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[13px] font-medium text-gray-900">
                Recent orders
              </p>
              <a
                href="/admin/orders"
                className="text-[11px] text-orange-600 hover:underline"
              >
                View all →
              </a>
            </div>
            
            {/* Scroll Container for Mobile Screens */}
            <div className="w-full overflow-x-auto scrollbar-thin">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr>
                    {["Order", "Customer", "Items", "Total", "Status"].map(
                      (h) => (
                        <th
                          key={h}
                          className="text-[10px] uppercase tracking-wide text-gray-400 font-medium text-left pb-2 border-b border-gray-100"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((o) => (
                    <tr
                      key={o.id}
                      className="hover:bg-orange-50/30 transition-colors"
                    >
                      <td className="text-[12px] text-gray-500 py-2.5 border-b border-gray-50">
                        {o.id}
                      </td>
                      <td className="text-[12px] text-gray-500 py-2.5 border-b border-gray-50">
                        {o.customer}
                      </td>
                      <td className="text-[12px] text-gray-500 py-2.5 border-b border-gray-50">
                        {o.items}
                      </td>
                      <td className="text-[12px] text-gray-500 py-2.5 border-b border-gray-50">
                        {o.total}
                      </td>
                      <td className="py-2.5 border-b border-gray-50">
                        <span
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-full inline-block ${statusStyles[o.status]}`}
                        >
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Products Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <p className="text-[13px] font-medium text-gray-900 mb-4">
              Top products
            </p>
            <div className="flex flex-col">
              {topProducts.map((p, i) => (
                <div
                  key={p.name}
                  className={`flex items-center gap-2.5 py-2.5 ${i < topProducts.length - 1 ? "border-b border-gray-50" : ""}`}
                >
                  <div className="w-8 h-8 rounded-[6px] overflow-hidden flex-shrink-0 bg-orange-50 flex items-center justify-center text-[18px] cursor-pointer">
                    {p.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-medium text-gray-800 truncate">
                      {p.name}
                    </p>
                    <p className="text-[10px] text-gray-400">{p.sold} sold</p>
                  </div>
                  <p className="text-[12px] font-medium text-gray-800 flex-shrink-0">
                    {p.revenue}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}