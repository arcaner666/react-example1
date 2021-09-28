import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  // useRef, state'ler için bir konteynır görevi görür. Her render cycle'da içerisine atılan state'in yenilenmemesini sağlar.
  const elRef = useRef(null);
  if (!elRef.current) {
    // document.createElement pahalı bir fonksiyondur. Her render cycle'da bir daha üretilmesi performansı kötü etkiler. Bu sebeple biz bu div'i useRef içerisine atıyoruz. Eğer zaten bir tane oluşturulmuşsa tekrar oluşturulmasını engelliyoruz.
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    // Modal aktifleştirildiği anda appendChild metodu ile modal'ı HTML DOM'a ekliyoruz.
    modalRoot.appendChild(elRef.current);
    // Modal ile işimiz bittiğinde ise HTML DOM'dan temizliyoruz. Temizleme ihtiyacının nedeni ise biz üstte appendChild fonksiyonuyla HTML DOM'a yeni bir div ekledik. Elli kere modal'ı kullandığımızı düşünelim. useRef'teki div'in referansını değiştirsek de HTML'de o div hala duruyor olacak. Bu sebeple div'i kullandıktan sonra HTML DOM'dan silmeliyiz.
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  // Portal her zaman tek bir büyük elementin içerisinde olmalıdır. Bu sebeple biz portal'ı bir div içerisine almalıyız. Aksi takdirde hatalarla karşılaşırız.
  // Portal'ın ilk parametresi modal içerisine gönderilen component'dir. İkinci parametresi ise yeni oluşturulan modal'ın kendisidir.
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
