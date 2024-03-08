const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className="flex ">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "Male" ? "selected" : ""}`}>
                    <span className="text-gray-400">Male</span>
                    <input type="checkbox" className="checkbox checkbox-info checkbox-sm"
                        checked={selectedGender === "Male"}
                        onChange={() => onCheckboxChange("Male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer ">
                    <span className="text-gray-400">Female</span>
                    <input type="checkbox" className="checkbox checkbox-info checkbox-sm"
                        checked={selectedGender === "Female"}
                        onChange={() => onCheckboxChange("Female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
