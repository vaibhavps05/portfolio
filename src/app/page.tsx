import HeroSection from "@/components/HeroSection";
import Image from 'next/image'


export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <HeroSection />
      <div className="container mx-auto px-4 h-[28rem] w-[80%] font-roboto text-neutral-400 tracking-widest">
        <div className="md:flex">
          <div className="md:px-5 w-[65%]">
            <h1 className="text-5xl py-4 font-roboto">Hi There!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar efficitur velit vel blandit. Pellentesque imperdiet eu lorem eu semper. Integer egestas nulla quis ante mattis, quis faucibus nibh ultrices. Mauris blandit purus sed libero vehicula, in feugiat est cursus. Integer laoreet, est eget gravida sagittis, ex ipsum luctus orci, eu sagittis odio ante nec eros. Sed sed pretium dui, et rutrum ipsum. Cras mollis est in sem gravida, lacinia gravida augue volutpat. Pellentesque ornare consectetur purus vitae lobortis. Proin volutpat scelerisque urna eget fringilla. Vivamus nec viverra sapien, eget rutrum lectus. Sed sit amet blandit lorem, eu euismod arcu. Mauris efficitur arcu ligula. Morbi ut placerat nisi. Ut mollis porttitor sapien, id tempus nisi ornare malesuada.</p>
          </div>
          <div className="md:px-5 ">
            <h1 className="text-5xl py-4 font-roboto">Links</h1>
            <ul className="flex pt-2">
              <li className="mr-6"><a href="https://github.com/vaibhavps05"><Image
                src="/github.png"
                width={24}
                height={24}
                alt="github"
              /></a></li>
              <li className="mr-6"><a href="https://www.instagram.com/"><Image
                src="/instagram.png"
                width={24}
                height={24}
                alt="instagram"
              /></a></li>
              <li className="mr-6"><a href="https://www.linkedin.com/in/vaibhav-pratap-singh-73550223a/"><Image
                src="/linkedin.png"
                width={24}
                height={24}
                alt="linkedin"
              /></a></li>
              <li className="mr-6"><a href="https://x.com/?lang=en"><Image
                src="/twitter.png"
                width={24}
                height={24}
                alt="twitter"
              /></a></li>
            </ul>
            <span className="flex my-5">
              <Image
                src="/email.png"
                width={24}
                height={24}
                alt="email"
              /> <p className="pl-6 text-white"> vaibhavps3005@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
