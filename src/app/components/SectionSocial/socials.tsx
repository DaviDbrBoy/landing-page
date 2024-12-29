import Image from "next/image";

export function Socials() {
    return(
        <div className="flex gap-24">
            <Image 
                src="social1.svg"
                alt="social1"
                width={146}
                height={48}
            />
            <Image 
                src="social2.svg"
                alt="social2"
                width={169}
                height={48}
            />
            <Image 
                src="social3.svg"
                alt="social3"
                width={183}
                height={48}
            />
            <Image 
                src="social4.svg"
                alt="social4"
                width={160}
                height={48}
            />
            <Image 
                src="social5.svg"
                alt="social5"
                width={187}
                height={48}
            />
        </div>
    )
}