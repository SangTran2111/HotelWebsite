
import { Room, Language } from './types';

export const BOOKING_PHONE = "+84 98 101 99 66";
export const HOTEL_ADDRESS = "B6~805 Water Front, Bãi Trường, Phú Quốc";

export const TRANSLATIONS: { [key in Language]: any } = {
  en: {
    hotelName: "Phu Quoc Star Hotel",
    navRooms: "Rooms",
    navAmenities: "Hospitality",
    navLocation: "Location",
    bookNow: "BOOK NOW",
    welcome: "Your Coastal Sanctuary",
    heroSub: "Experience the perfect blend of classic Indochine charm and modern island luxury.",
    explore: "View Rooms",
    experience: "Our Hospitality",
    ourRooms: "Our Rooms",
    roomsSub: "Immerse yourself in elegance. Our rooms are designed for the discerning traveler seeking comfort and style.",
    from: "From",
    callUs: "Direct Contact",
    resTitle: "Reservations",
    resSub: "Speak with our concierge for the best available rates",
    callNow: "Call Now",
    close: "Close",
    avail: "Hân hạnh đón tiếp - We look forward to welcoming you",
    locationTitle: "The Heart of Paradise",
    locationSub: "Perfectly positioned at Bãi Trường, we place you just moments away from white sands and vibrant island life.",
    temp: "Weather",
    airport: "Nearby",
    beachfront: "The Beach",
    footerSub: "Sincere hospitality in Phu Quoc since 2018.",
    quickLinks: "Information",
    followUs: "Social",
    chatGreeting: "Hi! I'm Starlet. Looking for an unforgettable stay at Phu Quoc Star Hotel? I'm here to assist you.",
    chatPlaceholder: "How can I help you today?",
    online: "Concierge",
    addressLabel: "Address"
  },
  vi: {
    hotelName: "Phu Quoc Star Hotel",
    navRooms: "Phòng nghỉ",
    navAmenities: "Lòng hiếu khách",
    navLocation: "Vị trí",
    bookNow: "ĐẶT PHÒNG",
    welcome: "Thiên Đường Nghỉ Dưỡng Riêng Tư",
    heroSub: "Trải nghiệm sự kết hợp hoàn hảo giữa nét quyến rũ cổ điển và sự sang trọng hiện đại tại Phú Quốc.",
    explore: "Xem phòng",
    experience: "Lòng hiếu khách",
    ourRooms: "Phòng nghỉ của chúng tôi",
    roomsSub: "Đắm mình trong sự tinh tế. Những căn phòng được thiết kế dành riêng cho kỳ nghỉ trọn vẹn của bạn.",
    from: "Giá từ",
    callUs: "Liên hệ trực tiếp",
    resTitle: "Đặt phòng",
    resSub: "Gọi cho chúng tôi để nhận ưu đãi tốt nhất",
    callNow: "Gọi ngay",
    close: "Đóng",
    avail: "Hân hạnh đón tiếp quý khách",
    locationTitle: "Tâm Điểm Thiên Đường",
    locationSub: "Vị trí đắc địa tại Bãi Trường, chỉ vài bước chân để chạm vào cát trắng và làn nước trong xanh.",
    temp: "Thời tiết",
    airport: "Lân cận",
    beachfront: "Bãi biển",
    footerSub: "Lòng hiếu khách chân thành từ năm 2018.",
    quickLinks: "Thông tin",
    followUs: "Kết nối",
    chatGreeting: "Chào bạn! Tôi là Starlet. Bạn đang tìm kiếm một kỳ nghỉ đáng nhớ tại Phu Quoc Star Hotel? Tôi luôn sẵn sàng hỗ trợ.",
    chatPlaceholder: "Tôi có thể giúp gì cho bạn?",
    online: "Lễ tân",
    addressLabel: "Địa chỉ"
  },
  ko: {
    hotelName: "푸꾸옥 스타 호텔",
    navRooms: "객실",
    navAmenities: "환대",
    navLocation: "위치",
    bookNow: "예약하기",
    welcome: "프라이빗 트로피컬 안식처",
    heroSub: "푸꾸옥의 중심에서 클래식한 매력과 현대적인 럭셔리의 완벽한 조화를 경험하세요.",
    explore: "객실 보기",
    experience: "우리의 환대",
    ourRooms: "객실 안내",
    roomsSub: "우아함에 푹 빠져보세요. 편안함과 스타일을 추구하는 여행자를 위해 설계되었습니다.",
    from: "가격",
    callUs: "직통 연락",
    resTitle: "예약 안내",
    resSub: "최고의 혜택을 위해 컨시어지에게 직접 문의하세요",
    callNow: "지금 전화하기",
    close: "닫기",
    avail: "진심으로 환영합니다",
    locationTitle: "지상 낙원의 중심",
    locationSub: "바이 쯔엉의 완벽한 위치로, 화이트 샌드와 활기찬 섬 생활을 바로 곁에서 즐기실 수 있습니다.",
    temp: "날씨",
    airport: "근처",
    beachfront: "해변",
    footerSub: "2018년부터 시작된 진심 어린 환대.",
    quickLinks: "정보",
    followUs: "소셜",
    chatGreeting: "안녕하세요! 스타렛입니다. 푸꾸옥 스타 호텔에서의 잊지 못할 숙박을 원하시나요? 무엇이든 도와드리겠습니다.",
    chatPlaceholder: "무엇을 도와드릴까요?",
    online: "컨시어지",
    addressLabel: "아드레스"
  }
};

export const ROOMS: Room[] = [
  {
    id: 'standard-vintage',
    name: { en: 'Classic Heritage', vi: 'Phòng Cổ Điển', ko: '클래식 헤리티지' },
    description: { 
      en: 'A bright 20m² room featuring traditional balcony views and Indochine decor.', 
      vi: 'Căn phòng 20m² sáng sủa với ban công truyền thống và trang trí kiểu Đông Dương.', 
      ko: '전통적인 발코니 전망과 인도차이나 장식이 돋보이는 밝은 20m² 객실.' 
    },
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    features: {
      en: ['Garden View', 'Private Balcony', 'Artisanal Decor'],
      vi: ['Hướng vườn', 'Ban công riêng', 'Nội thất tinh xảo'],
      ko: ['가든 뷰', '프라이빗 발코니', '장인정신 가구']
    }
  },
  {
    id: 'boutique-double',
    name: { en: 'Boutique Superior', vi: 'Phòng Superior', ko: '부티크 슈페리어' },
    description: { 
      en: 'Spacious and cozy with high ceilings and a signature arched window view.', 
      vi: 'Rộng rãi và ấm cúng với trần nhà cao và cửa sổ vòm đặc trưng.', 
      ko: '높은 천장과 시그니처 아치형 창문 전망을 갖춘 넓고 아늑한 공간.' 
    },
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80',
    features: {
      en: ['Signature View', 'Luxe Linens', 'Queen Suite'],
      vi: ['Tầm nhìn đẹp', 'Ga trải cao cấp', 'Phòng Queen'],
      ko: ['시그니처 뷰', '럭셔리 린넨', '퀸 스위트']
    }
  },
  {
    id: 'studio-star',
    name: { en: 'The Star Studio', vi: 'Phòng Studio Star', ko: '스타 스튜디오' },
    description: { 
      en: 'Our best room, featuring a large corner balcony and plenty of natural light.', 
      vi: 'Căn phòng đẹp nhất của chúng tôi, có ban công rộng và nhiều ánh sáng tự nhiên.', 
      ko: '넓은 코너 발코니와 풍부한 채광을 갖춘 가장 좋은 객실.' 
    },
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    features: {
      en: ['Panoramic Views', 'Expansive Balcony', 'King Retreat'],
      vi: ['Tầm nhìn toàn cảnh', 'Ban công rộng', 'Phòng King'],
      ko: ['파노라마 전망', '넓은 발코니', '킹 리트리트']
    }
  }
];

export const HOTEL_INFO = `
Phu Quoc Star Hotel is a boutique hotel that prioritizes heartfelt hospitality and guest rejuvenation.
We focus on providing a peaceful island retreat where every guest feels like family.
The experience is centered on sincere care, local charm, and professional service.
Location: B6~805 Water Front, Bãi Trường, Phú Quốc.
`;
