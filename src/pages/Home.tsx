import { useAuth } from '@/contexts/AuthContext';

function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">داشبورد</h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">@{user?.username}</p>
            </div>
            <div className="relative">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-500">{user?.name.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">به داشبورد خوش آمدید</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              این صفحه فقط برای کاربران احراز هویت شده قابل دسترسی است.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">پروفایل شما</h3>
                <p className="text-blue-600 dark:text-blue-300">اطلاعات حساب کاربری شما در این بخش قابل مشاهده است</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-green-800 dark:text-green-200 mb-2">تنظیمات</h3>
                <p className="text-green-600 dark:text-green-300">تنظیمات حساب کاربری خود را در این بخش مدیریت کنید</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-purple-800 dark:text-purple-200 mb-2">امنیت</h3>
                <p className="text-purple-600 dark:text-purple-300">تنظیمات امنیتی حساب کاربری خود را بررسی کنید</p>
              </div>
            </div>

            <button
              onClick={logout}
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              خروج از حساب
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home