interface ItemsProps {
    h1: string
    h3: string
    p: string
}

export default function Items({h1, h3, p}: ItemsProps) {
    return(
        <div className="text-center pr-24">
            <h1 className="text-brand-600 text-5xl xl:text-6xl xl:leading-[72px] font-semibold">{h1}</h1>
            <h3 className="text-gray-900 text-lg font-medium">{h3}</h3>
            <p className="text-gray-600">{p}</p>
        </div>
    )
} 