import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
    data: BillboardType
};

const Billboard: React.FC<BillboardProps> = ({
data
}) => {
     return(
        <div className="p-4 sm:p-8 lg:p-8 rounded-xl overflow-hidden h-96 w-full relative">
            <div className="rounded-xl aspect-square md:aspect-[3/1] overflow-hidden bg-cover"
                style={{backgroundImage: `url(${data?.imageUrl})`}}
            >

            </div>
            <div className="absolute bottom-12 left-24 text-4xl font-extrabold">{data.label}</div>
        </div>
     )
}

export default Billboard;