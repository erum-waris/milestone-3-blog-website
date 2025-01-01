import Heading2 from "@/app/components/Heading2";
import Heading3 from "@/app/components/Heading3";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


const Page = async () => {
  const data = await client.fetch(
    `*[_type == "blog"]`,
    {},
    { cache: "no-store" }
  );

  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Heading2 text="Blogs" />
      <div className="grid grid-cols-1 gap-6">
      
       {data.map((one:any,index:number) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-lg flex flex-col items-center"
          >
           <img src={urlFor(data.imageUrl).url()} alt="blog Image" width={400} height={400}/> 
   
         
           <Heading3 text={one.heading} />
            <p className="text-white mt-2 text-center text-base sm:text-md md:text-lg lg:text-xl bg-black/40 rounded-lg">
              {one.description}
            </p>
           
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Page;
 
