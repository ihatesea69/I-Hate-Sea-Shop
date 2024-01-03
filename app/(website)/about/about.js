import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
       Hieu Nghi Shop
      </h1>
      <div className="text-center">
        <p className="text-lg">Đem  bạn ra thế giới</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
       " Việc đưa doanh nghiệp ra thế giới internet là một bước quan trọng để mở rộng quy mô kinh doanh và kết nối toàn cầu. Internet không chỉ giúp tiếp cận khách hàng ở mọi nơi mà còn tối ưu hóa quy trình kinh doanh, giảm chi phí, và tạo ra các cơ hội tiếp thị mới. Tuy nhiên, để thành công, doanh nghiệp cần duy trì uy tín trực tuyến và tận dụng các công nghệ và kênh tiếp thị hiện đại. "  </p> 
      
        <p>
          <Link href="/contact">Liên hệ với chúng tôi ngay</Link>
        </p>
      </div>
    </Container>
  );
}
