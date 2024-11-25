import useUsers from "@/hooks/useUsers"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { useAuth } from "@/providers/AuthProvider"
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../ui/card"

function UsersQuickView({ className }: { className?: string }) {

    const { users } = useUsers()
    const { user } = useAuth()

    return (
        <>
            <Card className={className ? className : ''}>
                <CardHeader>
                    <CardTitle className="text-xl">Usuarios</CardTitle>
                    <CardDescription>Usuarios en la plataforma</CardDescription>
                </CardHeader>
                <CardContent className="">
                    <ul className="flex-col">
                        {users ?
                            users.map(currentUser => {

                                if (currentUser && currentUser._id != user._id)
                                    return (
                                        <li className="p-4 border-b-2 flex items-center gap-7 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors overflow-hidden text-ellipsis" key={currentUser._id}>
                                            <Avatar style={{ width: '2rem', height: '2rem' }} className="hidden sm:block" >
                                                <AvatarFallback asChild><span className="text-sm">{currentUser.username.slice(0, 2).toUpperCase()}</span></AvatarFallback>
                                            </Avatar>
                                            <span className="tracking-wide text-sm max-w-32 text-ellipsis overflow-hidden">{currentUser.username}</span>
                                            <Badge variant={currentUser.status ? 'default' : 'outline'} className="ml-auto">{currentUser.status ? 'Active' : 'Inactive'}</Badge>
                                            <Badge variant="secondary" className="">{currentUser.idTypeUser.nameTypeUser}</Badge>
                                        </li>
                                    )
                            })
                            :
                            <li>No hay usuarios</li>
                        }
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}
export default UsersQuickView
