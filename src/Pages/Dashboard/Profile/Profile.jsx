

const Profile = () => {
    return (
        <div>
            <h3 className="text-center text-2xl md:text-4xl font-bold">Profile</h3>
            <img className="h-[250px] w-[300px] mx-auto my-10" src="https://i.ibb.co/fvN1Zt9/aatik-tasneem-7om-HUGhhm-Z0-unsplash.jpg" alt="Profile Image" />
            <div>
                <div className="flex justify-center gap-[300px]">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold">Name</h3>
                        <p className="text-slate-500">Faisal Osman</p>
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold">Address</h3>
                        <p className="text-slate-500">Basundra Dhaka</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;