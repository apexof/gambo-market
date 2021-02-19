import AccountLayout from '../../components/Layouts/AccountLayout/AccountLayout'
import Invoice from '../../components/PagesData/Account/Invoice/Invoice'

export default function Account() {
    return (
        <AccountLayout rootPath="/store">
            <Invoice />
        </AccountLayout>
    )
}