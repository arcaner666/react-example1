import { createContext } from "react";

// Eğer bir uygulamada karanlık mod gibi veya API'den gelen kullanıcı bilgileri gibi uygulama içerisinde farklı yerlerde tekrar tekrar kullanılacak bir verimiz varsa bu verileri context'te tutarız. Fakat bu özellik okunabilirliği azaltıp karmaşıklığı arttırdığı için her zaman kullanılması pek tavsiye edilmiyor.
// Varsayılan değer olarak bir Hook vereceğiz. Bu sebeple alttaki yapıyı kullandık.
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
