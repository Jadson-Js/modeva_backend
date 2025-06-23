db.users.find({documents: {$in: [
      {
        title: 'RG Digitalizado',
        uploadedAt: ISODate('2025-06-20T19:20:08.361Z'),
        fileType: 'jpg',
        sizeInBytes: 102400,
        verified: false
      }
      ]})
