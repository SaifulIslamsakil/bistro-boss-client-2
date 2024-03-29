const SectionHading = ({subHadding, hadding}) => {
    return (
        <div className=" text-center lg:w-1/2 mx-auto space-y-3 p-5">
            <h4 className="text-yellow-600">---{subHadding}---</h4>
            <h2 className=" mx-auto  border-y-4 py-4 px-8 text-3xl font-bold uppercase">{hadding}</h2>
        </div>
    );
};

export default SectionHading;