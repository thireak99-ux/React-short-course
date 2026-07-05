import { useForm } from "react-hook-form";

export default function TestFormComponent() {
  
    const {
        register,
        handleSubmit,
        setError,
        watch,
        reset
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            username: '',
            phoneNumber: '',
            address: {
                "addressLine1": 'PP',
                "addressLine2": 'PP',
                "road": "2",
                "linkAddress": ""
            },
            confirmPassword: '',
            profile: 'https://i.pinimg.com/736x/3d/35/f8/3d35f8b45694233a34bb05d4867c6f0a.jpg',
        }
    });

    const onHandleFormSubmit = (value) => {
        try {
            async function handleRegister(){
                // FIXED: Moved the closing parenthesis to the very end of fetch()
                const res = await fetch("https://ishop.cheat.casa/api/v1/users/user-signup?emailVerified=false", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(value)
                }); 
                const data = await res.json();
                console.log(data);
            }
            handleRegister();
        } catch (error) {
            console.log(error);
        }
    }; 

    return (
        <div>
            <form action=" " onSubmit={handleSubmit(onHandleFormSubmit)}>
                <label htmlFor="username"> Username </label>
                <input
                    type="text"
                    name="username"
                    className="border"
                    {...register("username")}
                />
                
                <label htmlFor="email"> Email </label>
                <input
                    type="email"
                    name="email"
                    className="border"
                    {...register("email")}
                />
                
                <label htmlFor="password"> Password </label>
                <input
                    type="password"
                    name="password"
                    className="border"
                    {...register("password")}
                />

                <label htmlFor="confirmPassword"> Confirm Password </label>
                <input
                    type="password"
                    name="confirmPassword"
                    className="border"
                    {...register("confirmPassword")}
                />

                <label htmlFor="phoneNumber"> Phone Number </label>
                <input
                    type="text"
                    name="phoneNumber"
                    className="border"
                    {...register("phoneNumber")}
                />

                <button type="submit" className="border bg-blue-500 px-2"> Submit </button>
            </form>
        </div>
    );
}
