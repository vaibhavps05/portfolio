import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <HeroSection/>
      <div className="container mx-auto px-4 h-[33rem] w-[80%] font-roboto tracking-widest">
        <div className="md:flex">
          <div className="px-5">
            <h1>Hi There!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar efficitur velit vel blandit. Pellentesque imperdiet eu lorem eu semper. Integer egestas nulla quis ante mattis, quis faucibus nibh ultrices. Mauris blandit purus sed libero vehicula, in feugiat est cursus. Integer laoreet, est eget gravida sagittis, ex ipsum luctus orci, eu sagittis odio ante nec eros. Sed sed pretium dui, et rutrum ipsum. Cras mollis est in sem gravida, lacinia gravida augue volutpat. Pellentesque ornare consectetur purus vitae lobortis. Proin volutpat scelerisque urna eget fringilla. Vivamus nec viverra sapien, eget rutrum lectus. Sed sit amet blandit lorem, eu euismod arcu. Mauris efficitur arcu ligula. Morbi ut placerat nisi. Ut mollis porttitor sapien, id tempus nisi ornare malesuada.</p>
          </div>
          <div className="px-5">
            <h1>Links</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar efficitur velit vel blandit. Pellentesque imperdiet eu lorem eu semper. Integer egestas nulla quis ante mattis, quis faucibus nibh ultrices. Mauris blandit purus sed libero vehicula, in feugiat est cursus. Integer laoreet, est eget gravida sagittis, ex ipsum luctus orci, eu sagittis odio ante nec eros. Sed sed pretium dui, et rutrum ipsum. Cras mollis est in sem gravida, lacinia gravida augue volutpat. Pellentesque ornare consectetur purus vitae lobortis. Proin volutpat scelerisque urna eget fringilla. Vivamus nec viverra sapien, eget rutrum lectus. Sed sit amet blandit lorem, eu euismod arcu. Mauris efficitur arcu ligula. Morbi ut placerat nisi. Ut mollis porttitor sapien, id tempus nisi ornare malesuada.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
