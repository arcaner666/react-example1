import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

// React'teki class component'larda fonksiyon component'larda olmayan bir özellik vardır. Bu özelliğe Error Boundaries denir. Bu yapıyla sadece child'ımızdaki hataları yakalayabiliriz. Bu sebeple tüm uygumamızı kapsayacak ErrorBoundary adında bir component oluşturuyoruz.
class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return (
      // Burada istediğimiz şekilde hatayı yönetebiliriz. Çeşitli şart blokları ile durumu yönlendirebiliriz fakat biz kolaylık açısından burada sadece hata var diyeceğiz.
      { hasError: true }
    );
  }

  componentDidCatch(error, info) {
    // Burada istersek bu hatayı Sentry, Azure Monitor, New Relic ya da Track.js gibi hata görüntüleme yazılımlarına gönderebiliriz fakat biz burada sadece hatayı konsola yazdıracağız.
    console.error(`ErrorBoundary caught an error: ${error}, ${info}`);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      // Eğer child'da bir hata varsa burası çalışır.
      return (
        <h2>
          This listing has an error. <Link to="/">Click here</Link> to the go
          back to the home page or wait five seconds.
        </h2>
      );
    }

    // Eğer child'da bir hata yoksa burası çalışır.
    return this.props.children;
  }
}

export default ErrorBoundary;
