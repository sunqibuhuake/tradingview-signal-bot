import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import AdminSidebar from '@/components/admin/Sidebar';
import AdminHeader from '@/components/admin/Header';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <AdminHeader user={session.user} />
        
        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
