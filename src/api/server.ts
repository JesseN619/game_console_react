let token = '6b22e1d2c066dc083a49bb8410a22c2b9175f179304b07d5';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://console-inventory.herokuapp.com/api/consoles`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://console-inventory.herokuapp.com/api/consoles`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://console-inventory.herokuapp.com/api/consoles/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Did not update console - please try again')
        }
    },
    delete: async(id:string) => {
        const response = await fetch(`https://console-inventory.herokuapp.com/api/consoles/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Something went wrong here')
        }
    }
}