<div className="flex flex-col gap-4 justify-center items-center min-h-screen">
            <h2>Sign In</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>