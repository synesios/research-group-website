import React from 'react';

const Activities: React.FC = () => {
  const activities = [
    {
      title: '学术会议合影',
      description: '团队成员参加国际光学会议，与同行学者交流最新研究成果',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      date: '2024年3月',
      location: '香港会议展览中心'
    },
    {
      title: '实验室团建活动',
      description: '课题组全体成员户外团建，增进团队凝聚力和友谊',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
      date: '2024年2月',
      location: '香港大学校园'
    },
    {
      title: '新年聚餐',
      description: '课题组新年聚餐，庆祝过去一年的研究成果，展望新年计划',
      image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop',
      date: '2024年1月',
      location: '香港中环餐厅'
    },
    {
      title: '实验室开放日',
      description: '向访问学者和学生展示实验室设备和研究项目',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      date: '2023年12月',
      location: '光学实验室'
    },
    {
      title: '研究生答辩庆祝',
      description: '庆祝课题组研究生顺利通过博士答辩',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      date: '2023年11月',
      location: '香港大学'
    },
    {
      title: '中秋节聚会',
      description: '课题组中秋节聚会，品尝月饼，分享节日快乐',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      date: '2023年9月',
      location: '实验室休息区'
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Group Activities</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            记录我们课题组的精彩时光，从学术交流到团队建设，每一个瞬间都见证着我们的成长与友谊
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop';
                  }}
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">{activity.date}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{activity.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-hku-green to-hku-darkGreen rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">加入我们的团队</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              我们欢迎有志于光学研究的学者和学生加入我们的大家庭，一起探索科学的奥秘，创造美好的回忆
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-hku-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              联系我们
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;