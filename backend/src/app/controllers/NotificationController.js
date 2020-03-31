import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    // checa se é um provedor
    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only a provider can load notifications' });
    }

    // pegar todas as notificações do provedor
    const notifications = await Notification.find({ user: req.userId })
      .sort({ createAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
