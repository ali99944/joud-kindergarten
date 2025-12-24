
interface FacilityItemProps {
  title: string;
  image: string;
  color: string;
}


const FacilityItem = ({ title, image, color }: FacilityItemProps) => (
  <div className="group cursor-pointer">
    {/* Image Container - Rounded like the UI cards */}
    <div className="relative h-64 w-full rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
      <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-20 transition-opacity z-10`}></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
      />
      {/* Floating Icon/Tag */}
      <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg z-20">
         <span className="font-bold text-sm text-[#2D3436]">{title}</span>
      </div>
    </div>
  </div>
);

export default function Facilities() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider text-sm bg-purple-50 px-4 py-2 rounded-full">
            مرافقنا
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D3436] mt-6">
            بيئة تعليمية <span className="text-[#FF7675]">متكاملة</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FacilityItem 
            title="صفوف منظمة" 
            image="https://images.pexels.com/photos/8423452/pexels-photo-8423452.jpeg?auto=compress&cs=tinysrgb&w=800"
            color="bg-purple-500"
          />
          <FacilityItem 
            title="غرف الذكاء" 
            image="https://images.pexels.com/photos/3975570/pexels-photo-3975570.jpeg?auto=compress&cs=tinysrgb&w=800"
            color="bg-yellow-500"
          />
          <FacilityItem 
            title="ساحة وألعاب" 
            image="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=800"
            color="bg-orange-500"
          />
        </div>
      </div>
    </section>
  );
}