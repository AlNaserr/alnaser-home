import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      number: "15+",
      title: "سنة من الخبرة"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      number: "1000+",
      title: "عميل راضي"
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      number: "24/7",
      title: "خدمة العملاء"
    },
    {
      icon: <Star className="w-8 h-8 text-amber-500" />,
      number: "98%",
      title: "معدل الرضا"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              من نحن؟
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              شركة الناصر للعقارات هي واحدة من الشركات الرائدة في مجال العقارات في دمشق، 
              مع أكثر من 15 عاماً من الخبرة في تقديم أفضل الخدمات العقارية لعملائنا الكرام.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              نحن نؤمن بأن البيت ليس مجرد مكان للعيش، بل هو الحلم الذي نساعدك في تحقيقه. 
              فريقنا المتخصص يعمل بكل جهد لضمان حصولك على أفضل عقار يناسب احتياجاتك وميزانيتك.
            </p>

            {/* Mission */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
              <h3 className="text-xl font-bold text-blue-600 mb-3">رسالتنا</h3>
              <p className="text-gray-700">
                تقديم خدمات عقارية متميزة تتسم بالمهنية والشفافية والثقة، 
                مع الالتزام بأعلى معايير الجودة في خدمة عملائنا.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">رؤيتنا</h3>
              <p className="text-gray-700">
                أن نكون الخيار الأول للعملاء في مجال العقارات في سوريا، 
                من خلال تقديم خدمات مبتكرة وحلول عقارية متكاملة.
              </p>
            </div>
          </div>

          {/* Image and Stats */}
          <div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="الناصر للعقارات"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-3xl"></div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-3">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-700 text-sm">
                    {achievement.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            فريق العمل
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد الناصر",
                title: "المدير التنفيذي",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "ليلى محمد",
                title: "مديرة المبيعات",
                image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "خالد أحمد",
                title: "خبير عقاري",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;