import Header from "@/components/Header/Header"
import About from "@/components/About/About"
import Gallery from "@/components/Gallery/Gallery"
import ContactForm from "@/components/ContactForm/ContactForm"

export default function Home() {
  const userName = 'María López'
  const userImg = '/header/profile-user-image.jpg'

  return (
    <>
      <Header name={userName} imageUrl={userImg} />
      <About/>
      <Gallery/>
      <ContactForm/>
    </>
  )
}
