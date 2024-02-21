import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100">
          <div className="">
            <div className="text-6xl font-bold">
              Göz Alıcı, Hafif ve Dayanıklı Tasarım
            </div>
            <div className="text-">
              Dayanıklı, renkle işlenmiş arka cama ve konturlu kenarlara sahip
              göz alıcı bir tasarım, Dynamic Island, 2 kat Telefoto özellikli 48
              MP Ana Kamera ve USB-C ile, iPhone büyük yeniliklere imza atıyor
            </div>
            <div>İncele</div>
          </div>

          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/02/galaxy-s23-e1704290635819.png?w=634"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.samsung.com/tr/smartphones/galaxy-s24/images/galaxy-s24-highlights-comparison-mo.jpg?imbypass=true"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
