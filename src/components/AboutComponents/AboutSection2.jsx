import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';

const data = [
  { id: 1, icon: img1, value: '172+', label: 'Tax Services' },
  { id: 2, icon: img2, value: '97%', label: 'Recommended' },
  { id: 3, icon: img3, value: '100%', label: 'Satisfaction' },
  { id: 4, icon: img4, value: '46', label: 'International Awards' },
];

const AboutSection2 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:mt-40 mb-20 px-20">
      {data.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-[#cdd4f1] rounded-lg flex justify-center items-center">
            <img src={item.icon} alt={item.label} className="w-6 h-6 object-contain" />
          </div>
          <div className="text-3xl font-bold">{item.value}</div>
          <div className="text-main font-bold text-md">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default AboutSection2;
