

const PersonalDetails = () => {

    return (
        <div>
            <div className="pl-10">
                <h3 className="text-3xl font-bold">Personal Details</h3>
                <p className="mt-2">Update your name, email, and account password at any time.</p>
                <div className="mt-10">
                    <div className="flex gap-96">
                        <div>
                            <h3 className="font-semibold">Name</h3>
                            <p className="text-slate-600">Faisal Osman</p>
                        </div>
                        <div>
                            <h3 className="font-semibold cursor-pointer">Edit</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;