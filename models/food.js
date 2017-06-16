"use strict";
module.exports = function (sequelize, DataTypes) {
  const Food = sequelize.define('Food', {
    sbls: {
      type: DataTypes.CHAR(7),
      allowNull: false,
      primaryKey: true,
      field: 'SBLS'
    },
    st: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'ST'
    },
    ste: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'STE'
    },
    gcal: {
      type: "DOUBLE",
      allowNull: true,
      field: 'GCAL'
    },
    gj: {
      type: "DOUBLE",
      allowNull: true,
      field: 'GJ'
    },
    gcalzb: {
      type: "DOUBLE",
      allowNull: true,
      field: 'GCALZB'
    },
    gjzb: {
      type: "DOUBLE",
      allowNull: true,
      field: 'GJZB'
    },
    zw: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ZW'
    },
    ze: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ZE'
    },
    zf: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ZF'
    },
    zk: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ZK'
    },
    zb: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ZB'
    },
    zm: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ZM'
    },
    zo: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ZO'
    },
    za: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ZA'
    },
    va: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VA'
    },
    var: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VAR'
    },
    vac: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VAC'
    },
    vd: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VD'
    },
    ve: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VE'
    },
    veat: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VEAT'
    },
    vk: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VK'
    },
    vb1: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VB1'
    },
    vb2: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VB2'
    },
    vb3: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VB3'
    },
    vb3A: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VB3A'
    },
    vb5: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VB5'
    },
    vb6: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VB6'
    },
    vb7: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VB7'
    },
    vb9G: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VB9G'
    },
    vb12: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VB12'
    },
    vc: {
      type: "DOUBLE",
      allowNull: true,
      field: 'VC'
    },
    mna: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MNA'
    },
    mk: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MK'
    },
    mca: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MCA'
    },
    mmg: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MMG'
    },
    mp: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MP'
    },
    ms: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MS'
    },
    mcl: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MCL'
    },
    mfe: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MFE'
    },
    mzn: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MZN'
    },
    mcu: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MCU'
    },
    mmn: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MMN'
    },
    mf: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MF'
    },
    mj: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MJ'
    },
    kam: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KAM'
    },
    kas: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KAS'
    },
    kax: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KAX'
    },
    ka: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KA'
    },
    kmt: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KMT'
    },
    kmf: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KMF'
    },
    kmg: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KMG'
    },
    km: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KM'
    },
    kds: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KDS'
    },
    kdm: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KDM'
    },
    kdl: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KDL'
    },
    kd: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KD'
    },
    kmd: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KMD'
    },
    kpor: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KPOR'
    },
    kpon: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KPON'
    },
    kpg: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KPG'
    },
    kps: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KPS'
    },
    kp: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KP'
    },
    kbp: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KBP'
    },
    kbh: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KBH'
    },
    kbu: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KBU'
    },
    kbc: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KBC'
    },
    kbl: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KBL'
    },
    kbw: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KBW'
    },
    kbn: {
      type: "DOUBLE",
      allowNull: true,
      field: 'KBN'
    },
    eile: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EILE'
    },
    eleu: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ELEU'
    },
    elys: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ELYS'
    },
    emet: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EMET'
    },
    ecys: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ECYS'
    },
    ephe: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EPHE'
    },
    etyr: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ETYR'
    },
    ethr: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ETHR'
    },
    etrp: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ETRP'
    },
    eval: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EVAL'
    },
    earg: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EARG'
    },
    ehis: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EHIS'
    },
    eea: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EEA'
    },
    eala: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EALA'
    },
    easp: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EASP'
    },
    eglu: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EGLU'
    },
    egly: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EGLY'
    },
    epro: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EPRO'
    },
    eser: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ESER'
    },
    ena: {
      type: "DOUBLE",
      allowNull: true,
      field: 'ENA'
    },
    eh: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EH'
    },
    ep: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EP'
    },
    f40: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F40'
    },
    f60: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F60'
    },
    f80: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F80'
    },
    f100: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F100'
    },
    f120: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F120'
    },
    f140: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F140'
    },
    f150: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F150'
    },
    f160: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F160'
    },
    f170: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F170'
    },
    f180: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F180'
    },
    f200: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F200'
    },
    f220: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F220'
    },
    f240: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F240'
    },
    fs: {
      type: "DOUBLE",
      allowNull: true,
      field: 'FS'
    },
    f141: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F141'
    },
    f151: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F151'
    },
    f161: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F161'
    },
    f171: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F171'
    },
    f181: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F181'
    },
    f201: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F201'
    },
    f221: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F221'
    },
    f241: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F241'
    },
    fu: {
      type: "DOUBLE",
      allowNull: true,
      field: 'FU'
    },
    f162: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F162'
    },
    f164: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F164'
    },
    f182: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F182'
    },
    f183: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F183'
    },
    f184: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F184'
    },
    f193: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F193'
    },
    f202: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F202'
    },
    f203: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F203'
    },
    f204: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F204'
    },
    f205: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F205'
    },
    f222: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F222'
    },
    f223: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F223'
    },
    f224: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F224'
    },
    f225: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F225'
    },
    f226: {
      type: "DOUBLE",
      allowNull: true,
      field: 'F226'
    },
    fp: {
      type: "DOUBLE",
      allowNull: true,
      field: 'FP'
    },
    fk: {
      type: "DOUBLE",
      allowNull: true,
      field: 'FK'
    },
    fm: {
      type: "DOUBLE",
      allowNull: true,
      field: 'FM'
    },
    fl: {
      type: "DOUBLE",
      allowNull: true,
      field: 'FL'
    },
    fo3: {
      type: "DOUBLE",
      allowNull: true,
      field: 'FO3'
    },
    fo6: {
      type: "DOUBLE",
      allowNull: true,
      field: 'FO6'
    },
    fg: {
      type: "DOUBLE",
      allowNull: true,
      field: 'FG'
    },
    fc: {
      type: "DOUBLE",
      allowNull: true,
      field: 'FC'
    },
    gfps: {
      type: "DOUBLE",
      allowNull: true,
      field: 'GFPS'
    },
    gkb: {
      type: "DOUBLE",
      allowNull: true,
      field: 'GKB'
    },
    gmko: {
      type: "DOUBLE",
      allowNull: true,
      field: 'GMKO'
    },
    gp: {
      type: "DOUBLE",
      allowNull: true,
      field: 'GP'
    }
  }, {
    tableName: 'Food'
  });
  return Food;
};
