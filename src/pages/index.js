import Header from "@/components/Header/Header"
import About from "@/components/About/About"
import Interest from "@/components/Interest/Interest"
import ContactForm from "@/components/ContactForm/ContactForm"

export default function Home() {
  const userName = 'Julian Safadi'
  const userImg = '/profile-user-image.jpg'

  return (
    <>
      <Header name={userName} imageUrl={userImg} />
      <About/>
      <Interest/>
      <ContactForm/>
    </>
  )
}
