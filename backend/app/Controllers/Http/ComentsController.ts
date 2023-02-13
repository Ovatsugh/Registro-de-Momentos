import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Moment'
import Comment from 'App/Models/Comment'

export default class ComentsController {
    public  async store({request, params, response}: HttpContextContract) {
        const body = request.body()
        const momentId = params.momentId
        console.log(params)

        await Moment.findOrFail(momentId)
        body.momentId = momentId
        const coment = await Comment.create(body)

        response.status(201)

        return {
            msg: "adicionado com sucesso",
            data: coment,
        }

    }
}
