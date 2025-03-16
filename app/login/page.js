export default function Login() {
    return(
        <div class="flex min-h-screen items-center justify-center p-20">
            <form class="flex flex-col space-y-4">
                <input type="text" placeholder="Username" class="p-2 border border-gray-300 rounded-lg" />
                <input type="password" placeholder="Password" class="p-2 border border-gray-300 rounded-lg" />
                <button class="bg-blue-500 text-white p-2 rounded-lg">Login</button>
            </form>
        </div>          
    )
}