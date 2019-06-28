import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

// não precisa ser exatamente como a tabela da banco de dados
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // virtual é um campo que não existe no bd
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    // fazer o hash da senha
    this.addHook('beforeSave', async user => {
      // para ser chamado apenas caso esteja informando uma senha
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    // associação de 1 para 1
    // salvar a refenrencia de um id de arquivo dentro da tabela de usuário
    this.belongsTo(models.File, { foreignKey: 'avatar_id' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
