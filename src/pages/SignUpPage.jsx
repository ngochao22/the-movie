import React from "react";
import Field from "../components/field/Field";
import Label from "../components/label/Label";

const SignUpPage = () => {
    const benefitsList = [
        {
            id: 1,
            title: "Find something to watch on your subscribed streaming services",
        },
        { id: 2, title: "Log the movies and TV shows you have watched" },
        {
            id: 3,
            title: "Keep track of your favorite movies and TV shows and get recommendations from them",
        },
        { id: 4, title: "Build and maintain a personal watchlist" },
        { id: 5, title: "Build custom mixed lists (movies and TV)" },
        { id: 6, title: "Take part in movie and TV discussions" },
        {
            id: 7,
            title: "Contribute to, and improve the information in our database",
        },
    ];
    return (
        <div className="w-[1300px] mx-auto mt-5 flex gap-x-8">
            <div className="benefits w-[260px]">
                <h3 className="p-5 text-lg font-semibold text-white bg-[#00B4E4] rounded-t-lg">
                    Benefits of being a member
                </h3>
                <div className="py-2 shadow-lg text-[#0b0808]">
                    {benefitsList.map((item) => (
                        <p
                            key={item.id}
                            className="py-1 pl-5 pr-4 hover:bg-slate-100"
                        >
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className="signUp w-[1000px]">
                <h2 className="text-2xl font-bold text-black">
                    Sign up for an account
                </h2>
                <p className="font-medium text-[#393838] text-base mt-2">
                    Signing up for an account is free and easy. Fill out the
                    form below to get started.
                </p>
                <form action="" className="mt-10">
                    <Field>
                        <Label htmlFor="username">Username</Label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="px-3 py-2 border-[#898b8c] border rounded-md text-[#100f0f] outline-none focus:border-[#00B4E4] transition-all"
                        />
                    </Field>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
