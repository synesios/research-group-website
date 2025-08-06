import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: '首页', href: '#home' },
    { name: '关于我们', href: '#about' },
    { name: '研究方向', href: '#research' },
    { name: '论文发表', href: '#publications' },
    { name: '团队成员', href: '#team' },
    { name: '团队活动', href: '#activities' },
    { name: '联系我们', href: '#contact' }
  ];

  const researchAreas = [
    { name: '人工智能', href: '#research' },
    { name: '机器学习', href: '#research' },
    { name: '数据科学', href: '#research' },
    { name: '物联网技术', href: '#research' },
    { name: '网络安全', href: '#research' },
    { name: '云计算', href: '#research' }
  ];

  const socialLinks = [
    {
      name: '微信公众号',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.298c-.115.379.21.745.572.642l1.737-.496a.774.774 0 0 1 .38-.019c.818.171 1.686.26 2.177.26 4.8 0 8.691-3.288 8.691-7.342C16.382 5.476 13.491 2.188 8.691 2.188zm-2.46 5.695a.743.743 0 1 1 0-1.485.743.743 0 0 1 0 1.485zm4.92 0a.743.743 0 1 1 0-1.485.743.743 0 0 1 0 1.485z"/>
          <path d="M15.309 21.812c4.8 0 8.691-3.288 8.691-7.342 0-4.054-3.891-7.342-8.691-7.342-4.8 0-8.691 3.288-8.691 7.342 0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.298c-.115.379.21.745.572.642l1.737-.496a.774.774 0 0 1 .38-.019c.818.171 1.686.26 2.177.26z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: '微博',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.31 16.242c-2.206 0-4.126-1.143-4.126-2.663 0-1.519 1.92-2.663 4.126-2.663s4.126 1.144 4.126 2.663c0 1.52-1.92 2.663-4.126 2.663zm8.913-8.991c-.179-.288-.536-.427-.804-.31-.268.116-.357.427-.179.715.357.574.536 1.205.536 1.836 0 2.22-2.206 4.023-4.933 4.023-.804 0-1.608-.144-2.323-.43-.268-.144-.625-.029-.714.258-.089.287.089.603.357.746.893.43 1.875.659 2.859.659 3.57 0 6.473-2.306 6.473-5.14 0-.918-.268-1.807-.714-2.549l.442-.808z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: '#'
    }
  ];

  return (
    <footer className="bg-hku-darkGreen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-hku-gold mb-2">香港大学胡剑琦课题组</h3>
              <p className="text-green-100 mb-4">
                我们是香港大学的一个专注于前沿科技研究的团队，致力于推动人工智能、机器学习、
                数据科学等领域的创新发展。通过产学研合作，我们为社会发展贡献智慧和力量。
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>北京市海淀区学院路123号</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@researchgroup.edu</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+86 010-12345678</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-hku-gold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-green-200 hover:text-hku-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="text-lg font-semibold text-hku-gold mb-4">研究领域</h4>
            <ul className="space-y-2">
              {researchAreas.map((area, index) => (
                <li key={index}>
                  <a 
                    href={area.href} 
                    className="text-green-200 hover:text-hku-gold transition-colors duration-200"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-hku-green mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-green-300 hover:text-hku-gold transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-right text-green-200">
              <p className="mb-1">
                © {currentYear} 香港大学胡剑琦课题组. 保留所有权利.
              </p>
              <p className="text-sm">
                网站由 <span className="text-hku-gold">Trae AI</span> 构建
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="fixed bottom-6 right-6">
        <a
          href="#home"
          className="bg-hku-green hover:bg-hku-darkGreen text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          title="返回顶部"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;