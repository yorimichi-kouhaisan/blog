import Layout from "@/components/Layout";

function about() {
    return (
        <Layout title="About">
            <h1 className="text-5xl border-b-4 pb-5">About</h1>
            <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
                <h3 className="text-2xl mb-5">DevSpace Blog</h3>

                <p className="mb-3">
                    This is blog built
                </p>
                <span className="font-bold">Version 1.0.0</span>
            </div>
        </Layout>
    );
}

export default about;