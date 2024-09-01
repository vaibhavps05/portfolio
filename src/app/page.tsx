import HeroSection from "@/components/HeroSection";
import Image from 'next/image'


export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <HeroSection />
      <div className="container mx-auto px-4 h-[28rem] w-[80%] font-roboto text-neutral-400 tracking-widest">
        <div className="md:flex">
          <div className="md:px-5 md:w-[65%]">
            <h1 className="text-5xl py-4 font-roboto">Hi There!</h1>
            <p className="md:text-justify">
            My name is Vaibhav Pratap Singh. I&apos;m a final-year undergraduate student at Delhi Technological University (DTU). I am proficient in <span className="font-extrabold">Python, C++, and SQL </span> with hands-on experience in using libraries and frameworks such as <span className="font-extrabold">NumPy, Pandas, Matplotlib, Keras, Scikit-learn, TensorFlow, PyTorch, and OpenCV</span>. I also work with platforms including <span className="font-extrabold">Jupyter Notebook, Google Colab, Anaconda and Git-GitHub</span> for data analysis, visualization, and version control. Additionally, I am skilled in using <span className="font-extrabold">Excel, Tableau, and Power BI</span> for business intelligence and reporting.
            </p>
            <ul className="pt-5 pb-5 list-outside list-disc">
              Currently, I am :
              <div className="px-10 py-5 ">
              <li> Developing an end-to-end MRI scan classification system that leverages computer vision and machine learning for innovative healthcare solutions.</li>
              <li> Learning about LLM, GANs and building CI/CD pipelines.</li>
              <li> Learning how to migrate data pipeline workflows in Apache Airflow to enhance my expertise in managing and optimizing ETL processes.</li>
              <li> Looking for interesting and impactful work/research in AI and/or Data Science (please reach out).</li>
              </div>
            </ul>
          </div>
          <div className="md:px-5 ">
            <h1 className="text-5xl py-4 font-roboto">Links</h1>
            <ul className="flex pt-2 pl-1">
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
            <span className="flex my-5 pl-1">
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
      <footer className="w-full pt-10 md:pt-0 pb-10" id="contact">
      <div className="flex mt-[60rem] md:mt-[12rem] md:flex-row flex-col justify-center items-center text-neutral-600">
        <div className="md:text-base text-sm md:font-normal font-light">
          {/* <p>Inspired by dank memes and dreams</p><br /> */}
        <p> © 2024 Vaibhav Pratap Singh</p>
        </div>
      </div>
    </footer>
    </main>
  );
}
