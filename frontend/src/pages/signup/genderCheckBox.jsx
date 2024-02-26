const GenderCheckBox = () => {
    return (
        <div className="flex ">
            <div className="form-control">
                <label className="label gap-2 cursor-pointer ">
                    <span className="text-gray-400">Male</span>
                    <input type="checkbox" className="checkbox checkbox-info checkbox-sm" />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer ">
                    <span className="text-gray-400">Female</span>
                    <input type="checkbox" className="checkbox checkbox-info checkbox-sm" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
